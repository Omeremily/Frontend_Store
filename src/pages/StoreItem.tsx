import { StoreItemProps } from '../types/storeTypes';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { ItemContext } from '../context/ItemContext';
import SpecificItem from '../components/specificItem';

//פונקציית הצגת מוצרים בדף החנות
export default function StoreItem(){

  // הפעלת הפונקציה יוז-פאראמס על מנת לקבל את המזהה הייחודי שהועבר בנתיב ה-יואראל.
  let {id } = useParams();

  // שימוש באייטם-קונטקסט על מנת לקבל את מערך מוצרי החנות
  const {items} = useContext<any>(ItemContext);

  // הגדרת משתנה מקומי בשם "מוצר" עם הערך ההתחלתי נאל, שיכיל את הפרטים של מוצר החנות מהמערך.
  const [product, setProduct] = useState<StoreItemProps|null>(null);

  // שימוש ביוז-אקפט פעם אחת בלבד בעת טעינת הדף - מתבצע חיפוש מוצר עם אותו מזהה ייחודי כמו זה שבמערך
  useEffect(()=>{
    setProduct(items.find((item:StoreItemProps)=> item.id == Number(id)))
  }, [])

  // החזרת הרכיב מוצר ספציפי עם הפרמטרים המתאימים. במידה ולא נמצא מוצר עם המזהה הייחודי המתאים יהיה ריק ולא יציג אותו
  return (
    <>
      <SpecificItem {...product} onlyToSpecific={Boolean(product)}/>
    </>
  )

}
