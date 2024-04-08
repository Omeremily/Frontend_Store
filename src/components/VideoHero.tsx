// ייבוא פעולת יוז אפקט כדי להציג את הסרטון
import React, { useEffect } from "react";
//ייבוא מאפיינים שקומפוננטת וידאו צריכה לקבל כדי להציג את הסרטון
import { VideoProps } from "../types/storeTypes";


// הגדרת רכיב בשם "וידאו" שהוא רכיב פונקציונלי של ריאקט, המקבל פרופסים - לינק מקור של הוידאו
// כל ההגדרות ירוצו פעם אחת בלבד - ברגע שהדף נטען לראשונה - סוגריים מרובעים ריקים
const Video: React.FC<VideoProps> = ({ src }) => {
    // משתמש באפקט useEffect כדי לבצע פעולות צד לקומפוננטה כאשר היא מורכבת
    useEffect(() => {
        // מציאת אלמנט וידאו בעזרת מזהה ייחודי
        const videoElement = document.getElementById("storeVideo") as HTMLVideoElement;
        // בדיקה שהאלמנט נמצא באובייקט
        if (videoElement) {
            // הגדרת פעולת הפעלה אוטומטית בזמן טעינת הדף
            videoElement.autoplay = true;
            // הפעלת צליל מושתק בזמן הפעלת הוידאו
            videoElement.muted = true;
            // הפעלת הלולאה האינסופית של הוידאו כך שהוידאו יתנגן מחדש כל פעם שהוא מסתיים
            videoElement.loop = true;
        }
    }, []);

    // הצגת הוידאו בעת שימוש בקומפוננטה - במידה ואין תמיכת דפדפן הצגת ההודעה 
    return (
        <video id="storeVideo">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default Video;
