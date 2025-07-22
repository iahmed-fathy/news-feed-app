# News Feed App

تطبيق ويب لعرض أحدث الأخبار من مصادر متعددة، مع إمكانية البحث وتصفية الأخبار حسب الفئة.

## المميزات

- عرض الأخبار حسب الفئة (عام، أعمال، ترفيه، صحة، علوم، رياضة، تكنولوجيا)
- البحث عن الأخبار بكلمة مفتاحية
- التنقل بين صفحات الأخبار
- تصميم متجاوب باستخدام [Material UI](https://mui.com/)
- تحميل ديناميكي للبيانات من [NewsAPI](https://newsapi.org/)

## لقطات الشاشة

![واجهة التطبيق الرئيسية](./public/screenshots/Screen-Shot-1.png)
![نتائج البحث](./public/screenshots/Screen-Shot-2.png)

## المتطلبات

- Node.js (الإصدار 18 أو أحدث)
- حساب مجاني في [NewsAPI](https://newsapi.org/) للحصول على مفتاح API

## طريقة التشغيل

1. قم بتثبيت الحزم:

   ```sh
   npm install
   ```

2. أنشئ ملف `.env` في جذر المشروع وأضف مفتاح الـ API الخاص بك:

   ```
   VITE_NEWS_FEED_API_KEY=your_api_key_here
   ```

3. شغّل التطبيق في وضع التطوير:

   ```sh
   npm run dev
   ```

4. افتح المتصفح على [http://localhost:5173](http://localhost:5173)

## هيكل المشروع

```
src/
  App.jsx
  AppContext.jsx
  hooks/
    useFetchData.js
  components/
    NewsFeed.jsx
    NewsHeader.jsx
    NewsArticle.jsx
    LoadingArticleSkeleton.jsx
    FooterContainer.jsx
    SearchInput.jsx
    SelectDropdownList.jsx
    StyledCard.jsx
  index.css
  main.jsx
public/
  NewsFavIcon.png
```
