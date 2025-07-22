# News Feed App

تطبيق ويب يعرض أحدث الأخبار من مصادر متعددة باستخدام NewsAPI، مع دعم البحث والتصفية حسب الفئة، ومصمم بواجهة متجاوبة باستخدام React وMaterial UI.

## ✨ المميزات

- تصفية الأخبار حسب الفئة (عام، أعمال، ترفيه، صحة، علوم، رياضة، تكنولوجيا)
- البحث باستخدام كلمات مفتاحية
- التنقل بين الصفحات (Pagination)
- تصميم متجاوب باستخدام [Material UI](https://mui.com/)

## 📸 لقطات الشاشة

![واجهة التطبيق الرئيسية](./public/screenshots/Screen-Shot-1.png)  
![نتائج البحث](./public/screenshots/Screen-Shot-2.png)

## 🧰 المتطلبات

- Node.js (الإصدار 18 أو أحدث)
- حساب مجاني على [NewsAPI](https://newsapi.org/) للحصول على مفتاح API
- حساب على [Vercel](https://vercel.com/) (اختياري للنشر)

## 🚀 بدء التشغيل محليًا

1. تثبيت التبعيات:

```bash
npm install
```

2. إنشاء ملف `.env` في جذر المشروع وإضافة مفتاح API الخاص بك:

```env
VITE_NEWS_FEED_API_KEY=your_api_key_here
```

3. تشغيل بيئة التطوير:

```bash
npm run dev
```

4. فتح التطبيق على:

```
http://localhost:5173
```

## 🌐 النشر على Vercel

1. تأكد من رفع المشروع إلى GitHub.
2. أنشئ مشروعًا جديدًا على Vercel أو اربطه من خلال Vercel CLI.
3. من لوحة إعدادات مشروعك على Vercel، أضف المتغير البيئي التالي:
   - الاسم: `VITE_NEWS_FEED_API_KEY`
   - القيمة: (مفتاح API الخاص بك من NewsAPI)
4. ثم نفذ الأمر التالي لنشر المشروع:

```bash
npx vercel --prod
```

## 🗂️ هيكل المشروع

```
/api
  news.js            ← API داخلي لجلب الأخبار من NewsAPI

/src
  App.jsx
  AppContext.jsx
  main.jsx
  index.css

  /hooks
    useFetchData.js

  /components
    NewsFeed.jsx
    NewsHeader.jsx
    NewsArticle.jsx
    LoadingArticleSkeleton.jsx
    FooterContainer.jsx
    SearchInput.jsx
    SelectDropdownList.jsx
    StyledCard.jsx

/public
  NewsFavIcon.png
  /screenshots
    Screen-Shot-1.png
    Screen-Shot-2.png
```

## ⚠️ ملاحظات مهمة

- يتم استخدام API داخلي في مجلد `/api` لتجاوز قيود CORS في NewsAPI.
- يجب تشغيل التطبيق من `localhost` أو عبر Vercel ليعمل المفتاح المجاني الخاص بـ NewsAPI بنجاح.
