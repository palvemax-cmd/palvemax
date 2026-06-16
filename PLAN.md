# PalveMax — план развития

## ✅ Сделано
- Полный сайт RU/FI/EN (174+ страниц каждый язык)
- SEO-оптимизация: sitemap, robots, hreflang, schema
- Cookie banner, Privacy Policy, Cookie Policy
- LangSwitcher с умным роутингом
- Форма заявки с загрузкой фото

---

## 📋 Следующие шаги

### 1. Telegram-уведомления из формы
**Что нужно:**
- Создать Telegram-бота: открыть @BotFather, команда `/newbot`
- Получить `BOT_TOKEN` и `CHAT_ID` (свой или группы)
- Добавить в Vercel Environment Variables:
  - `TELEGRAM_BOT_TOKEN=...`
  - `TELEGRAM_CHAT_ID=...`
- Обновить `app/api/contact/route.ts`:
  ```ts
  await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: `Новая заявка!\nИмя: ${name}\nТелефон: ${phone}\nГород: ${city}\nУслуга: ${service}\nКомментарий: ${comment}`,
      parse_mode: "HTML",
    }),
  });
  ```

### 2. Email info@palvemax.fi после подключения домена
**Вариант A — Resend (рекомендован, бесплатно до 3000/мес):**
1. Зарегистрироваться на resend.com
2. Добавить домен palvemax.fi
3. Создать API key
4. Добавить MX-запись в DNS (у регистратора домена)
5. Добавить в Vercel Environment Variables: `RESEND_API_KEY=...`
6. Использовать `from: info@palvemax.fi` в коде формы

**Вариант B — Forwarder:**
- Использовать ImprovMX (improvmx.com) — бесплатный форвардинг
- info@palvemax.fi → ваш Gmail/любой ящик
- Только добавить MX-записи в DNS

### 3. Подключение домена palvemax.fi к Vercel
1. В Vercel → Settings → Domains → Add `palvemax.fi`
2. Vercel выдаст IP или CNAME
3. В панели регистратора домена изменить A-запись на IP Vercel
4. Подождать 10-60 минут
5. SSL-сертификат выдаётся автоматически

### 4. Google Analytics / Search Console
1. Добавить сайт в Google Search Console
2. Подтвердить через HTML-тег в layout.tsx или DNS
3. Отправить sitemap: https://palvemax.fi/sitemap.xml
4. GA4: добавить Measurement ID в Vercel env vars
