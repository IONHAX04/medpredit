import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import KnowCards from "../../pages/KnowCards/KnowCards";
import axios from "axios";
import decrypt from "../../helper";

const KnowAboutPatient: React.FC = () => {
  const { patient } = useParams<{ patient: string }>();

  const [categories, setCategories] = useState<
    { refQCategoryId: number; refCategoryLabel: string }[]
  >([]);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [subCategoryData, setSubCategoryData] = useState<
    { refQCategoryId: number; refCategoryLabel: string }[]
  >([]);
  const tokenString: any = localStorage.getItem("userDetails");

  const tokenObject = JSON.parse(tokenString);
  const token = tokenObject.token;

  useEffect(() => {
    if (tokenString) {
      try {
        axios
          .get(`${import.meta.env.VITE_API_URL}/getMainCategory`, {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            const data = decrypt(
              response.data[1],
              response.data[0],
              import.meta.env.VITE_ENCRYPTION_KEY
            );

            if (data.data.length > 0) {
              setCategories(data.data);
              const firstCategory = data.data[0];
              setSelectedValue(firstCategory.refCategoryLabel);
              subMainCategory(firstCategory.refQCategoryId);
            }
          });
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    }
  }, [tokenString]);

  const subMainCategory = async (categoryId: number) => {
    try {
      const subCategory = await axios.post(
        `${import.meta.env.VITE_API_URL}/getSubMainCategory`,
        {
          SubCategoryId: categoryId,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      const data = decrypt(
        subCategory.data[1],
        subCategory.data[0],
        import.meta.env.VITE_ENCRYPTION_KEY
      );

      if (data.status) {
        setSubCategoryData(data.data);
      }
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const handleSegmentChange = (value: any) => {
    setSelectedValue(value);

    const selectedCategory = categories.find(
      (category) => category.refCategoryLabel === value
    );
    if (selectedCategory) {
      subMainCategory(selectedCategory.refQCategoryId);
    }
  };

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/patient"></IonBackButton>
          </IonButtons>
          <IonTitle>{patient}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonToolbar>
          <IonSegment
            value={selectedValue}
            scrollable={true}
            onIonChange={(e) => handleSegmentChange(e.detail.value!)}
          >
            {categories.map((category) => (
              <IonSegmentButton
                key={category.refQCategoryId}
                value={category.refCategoryLabel}
                contentId={category.refCategoryLabel}
              >
                <IonLabel>{category.refCategoryLabel}</IonLabel>
              </IonSegmentButton>
            ))}
          </IonSegment>
        </IonToolbar>
        <div>
          {categories.map((category) => (
            <IonSegmentContent
              key={category.refQCategoryId}
              id={category.refCategoryLabel}
            >
              {selectedValue === category.refCategoryLabel && (
                <KnowCards cardData={subCategoryData} />
              )}
            </IonSegmentContent>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default KnowAboutPatient;
