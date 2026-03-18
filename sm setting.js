// ── Spicy Masti Shared Settings ──
// Handles Dark/Light mode + Hindi/English language across all pages

const SM = {

  // ── All translations ──
  translations: {
    en: {
      // NAV
      'nav.location':   'Location',
      'nav.offers':     'Offers',
      'nav.help':       'Help',
      'nav.settings':   'Settings',
      'nav.back':       '← Menu',

      // LOGO SUBTITLE
      'logo.sub':       'Street Food & More',
      'logo.sub.help':  'Help & Support',
      'logo.sub.settings': 'Settings',

      // INDEX — HERO
      'hero.tag':       '🌶️ Desi Flavours',
      'hero.h2':        'Bold Food,',
      'hero.h2.span':   'Bolder Taste.',
      'hero.p':         'Fresh made • Street style • Full of flavour',
      'hero.247':       '🕐 Open 24/7',

      // INDEX — CATEGORIES
      'cat.all':        '🍽️ All',
      'cat.burger':     '🍔 Burger',
      'cat.maggi':      '🍜 Maggi',
      'cat.snacks':     '🍿 Snacks',
      'cat.breads':     '🥖 Breads',
      'cat.pasta':      '🍝 Pasta',
      'cat.shakes':     '🥤 Shakes',
      'cat.soup':       '🥣 Soup',
      'cat.dessert':    '🍮 Dessert',

      // INDEX — FOOD ITEMS
      'item.aloo.tikki':        'Aloo Tikki Burger',
      'item.cheese.burger':     'Cheese Burger',
      'item.double.tikki':      'Double Tikki Burger',
      'item.french.burger':     'French Burger',
      'item.masala.maggi':      'Masala Maggi',
      'item.double.masala.maggi':'Double Masala Maggi',
      'item.veggie.maggi':      'Veggie Maggi',
      'item.cheese.maggi':      'Cheese Maggi',
      'item.chilli.maggi':      'Chilli Hot Garlic Maggi',
      'item.maggi.delight':     'Maggi Delight',
      'item.plain.corn':        'Plain Sweetcorn',
      'item.classic.corn':      'Classic Sweetcorn',
      'item.butter.corn':       'Butter Masala Sweetcorn',
      'item.tandoori.corn':     'Tandoori Sweetcorn',
      'item.french.fries':      'French Fries',
      'item.peri.fries':        'Peri Peri Fries',
      'item.cheese.fries':      'Cheese Fries',
      'item.cheese.garlic':     'Cheese Garlic Bread',
      'item.corn.garlic':       'Sweetcorn Garlic Bread',
      'item.stuffed.garlic':    'Stuffed Garlic Bread',
      'item.veg.macaroni':      'Vegetables Macaroni',
      'item.ghar.pasta':        'Ghar Jesa Pasta',
      'item.white.pasta':       'White Sauce Pasta',
      'item.red.pasta':         'Red Sauce Pasta',
      'item.mix.pasta':         'Mix Sauce Pasta',
      'item.pasta.delight':     'Pasta Delight',
      'item.iced.americano':    'Iced Americano',
      'item.cold.coffee':       'Cold Coffee Shake',
      'item.oreo.shake':        'Oreo Shake',
      'item.kitkat.shake':      'KitKat Shake',
      'item.choco.shake':       'Chocolate Shake',
      'item.tomato.soup':       'Tomato Soup',
      'item.veg.soup':          'Mix Veg Soup',
      'item.hot.sour':          'Hot & Sour',
      'item.gulab.jamun':       'Gulab Jamun (3 pcs)',

      // INDEX — FOOTER
      'footer.text':    '© 2026 All Rights Reserved',

      // HELP PAGE
      'help.hero.tag':  'Support Centre',
      'help.hero.h1':   'How can we',
      'help.hero.h1.span': 'help you?',
      'help.hero.p':    'Find answers below or get in touch with us directly.',
      'help.call.title':'Call Us Directly',
      'help.call.sub':  'Available 24/7 · We\'re always here',
      'help.call.btn':  'Call Now',

      'help.faq.order':       '🛒 Order Related',
      'help.q1':  'Can I customise my order?',
      'help.a1':  'Yes! Just mention your preferences when ordering — we\'ll do our best to accommodate. You can also call us directly and we\'ll sort it out.',
      'help.q2':  'How long does my order take?',
      'help.a2':  'Most orders are ready within 10–20 minutes. During peak hours it may take slightly longer. We\'ll always keep you informed.',
      'help.q3':  'Can I cancel my order?',
      'help.a3':  'Cancellations are accepted only before preparation begins. Please call us immediately at +91 72909 45445 to request a cancellation.',

      'help.faq.location':    '📍 Timings & Location',
      'help.q4':  'What are your opening hours?',
      'help.a4':  'Spicy Masti is open 24/7 — every day, all day and night. No holidays, no closing time. We\'re always here for you! 🌶️',
      'help.q5':  'Where are you located?',
      'help.a5':  'You can find our exact location on Google Maps. Tap the Location option in the main menu and it will open directions for you.',

      'help.faq.payment':     '💳 Payment Methods',
      'help.q6':  'What payment methods do you accept?',
      'help.a6':  'We accept Cash, UPI (GPay, PhonePe, Paytm), and all major debit/credit cards. No extra charges on any payment method.',
      'help.q7':  'What if I was charged incorrectly?',
      'help.a7':  'Please call us immediately at +91 72909 45445 or use the contact form below with your payment screenshot and we\'ll resolve it right away.',

      'help.form.label':  '✉️ Send Us a Message',
      'help.form.h3':     'Still need help?',
      'help.form.p':      'All fields are required. Fill in the form and we\'ll get back to you soon.',
      'help.form.name':   'Your Name',
      'help.form.phone':  'Phone Number',
      'help.form.gmail':  'Gmail Address',
      'help.form.desc':   'Describe your issue',
      'help.form.images': 'Attach Images',
      'help.form.img.sub':'JPG, PNG, WEBP · Max 5 images',
      'help.form.tap':    'Tap to upload images',
      'help.form.btn':    'Send Message →',
      'help.form.name.ph':'e.g. Rahul Sharma',
      'help.form.phone.ph':'10-digit number e.g. 9876543210',
      'help.form.gmail.ph':'e.g. yourname@gmail.com',
      'help.form.desc.ph':'Tell us what happened or what you need help with...',
      'help.toast.ok':    '✅ Message sent! We\'ll get back to you soon.',
      'help.toast.err':   '❌ Failed to send. Please try again.',

      // SETTINGS PAGE
      'set.hero.h1':    'Settings',
      'set.hero.p':     'Personalise your Spicy Masti experience',
      'set.appear':     '🌙 Appearance',
      'set.light.title':'Light Mode',
      'set.light.sub':  'Tap to switch to dark mode',
      'set.dark.title': 'Dark Mode',
      'set.dark.sub':   'Tap to switch to light mode',
      'set.lang':       '🌐 Language',
      'set.lang.title': 'Choose your language',
      'set.lang.sub':   'Select the language you prefer',
      'set.info':       'ℹ️ App Info',
      'set.info.sub':   'Cloud Kitchen · Faridabad',

      // OFFERS PAGE
      'offers.title':   'Offers & Deals',
      'offers.h1':      'Coming Soon',
      'offers.p':       'We\'re cooking up some great deals for you. Check back soon for exciting offers!',
      'offers.btn':     '← Back to Menu',
    },

    hi: {
      // NAV
      'nav.location':   'स्थान',
      'nav.offers':     'ऑफर',
      'nav.help':       'सहायता',
      'nav.settings':   'सेटिंग्स',
      'nav.back':       '← मेनू',

      // LOGO SUBTITLE
      'logo.sub':       'स्ट्रीट फूड & अधिक',
      'logo.sub.help':  'सहायता & समर्थन',
      'logo.sub.settings': 'सेटिंग्स',

      // INDEX — HERO
      'hero.tag':       '🌶️ देसी स्वाद',
      'hero.h2':        'दमदार खाना,',
      'hero.h2.span':   'दमदार स्वाद।',
      'hero.p':         'ताज़ा बना • स्ट्रीट स्टाइल • भरपूर स्वाद',
      'hero.247':       '🕐 24/7 खुला',

      // INDEX — CATEGORIES
      'cat.all':        '🍽️ सभी',
      'cat.burger':     '🍔 बर्गर',
      'cat.maggi':      '🍜 मैगी',
      'cat.snacks':     '🍿 स्नैक्स',
      'cat.breads':     '🥖 ब्रेड',
      'cat.pasta':      '🍝 पास्ता',
      'cat.shakes':     '🥤 शेक',
      'cat.soup':       '🥣 सूप',
      'cat.dessert':    '🍮 मिठाई',

      // INDEX — FOOD ITEMS
      'item.aloo.tikki':        'आलू टिक्की बर्गर',
      'item.cheese.burger':     'चीज़ बर्गर',
      'item.double.tikki':      'डबल टिक्की बर्गर',
      'item.french.burger':     'फ्रेंच बर्गर',
      'item.masala.maggi':      'मसाला मैगी',
      'item.double.masala.maggi':'डबल मसाला मैगी',
      'item.veggie.maggi':      'वेजी मैगी',
      'item.cheese.maggi':      'चीज़ मैगी',
      'item.chilli.maggi':      'चिल्ली हॉट गार्लिक मैगी',
      'item.maggi.delight':     'मैगी डिलाइट',
      'item.plain.corn':        'सादा स्वीटकॉर्न',
      'item.classic.corn':      'क्लासिक स्वीटकॉर्न',
      'item.butter.corn':       'बटर मसाला स्वीटकॉर्न',
      'item.tandoori.corn':     'तंदूरी स्वीटकॉर्न',
      'item.french.fries':      'फ्रेंच फ्राइज़',
      'item.peri.fries':        'पेरी पेरी फ्राइज़',
      'item.cheese.fries':      'चीज़ फ्राइज़',
      'item.cheese.garlic':     'चीज़ गार्लिक ब्रेड',
      'item.corn.garlic':       'स्वीटकॉर्न गार्लिक ब्रेड',
      'item.stuffed.garlic':    'स्टफ्ड गार्लिक ब्रेड',
      'item.veg.macaroni':      'वेजिटेबल मैकरोनी',
      'item.ghar.pasta':        'घर जैसा पास्ता',
      'item.white.pasta':       'व्हाइट सॉस पास्ता',
      'item.red.pasta':         'रेड सॉस पास्ता',
      'item.mix.pasta':         'मिक्स सॉस पास्ता',
      'item.pasta.delight':     'पास्ता डिलाइट',
      'item.iced.americano':    'आइस्ड अमेरिकानो',
      'item.cold.coffee':       'कोल्ड कॉफी शेक',
      'item.oreo.shake':        'ओरियो शेक',
      'item.kitkat.shake':      'किटकैट शेक',
      'item.choco.shake':       'चॉकलेट शेक',
      'item.tomato.soup':       'टमाटर सूप',
      'item.veg.soup':          'मिक्स वेज सूप',
      'item.hot.sour':          'हॉट & साॅर',
      'item.gulab.jamun':       'गुलाब जामुन (3 पीस)',

      // INDEX — FOOTER
      'footer.text':    '© 2026 सर्वाधिकार सुरक्षित',

      // HELP PAGE
      'help.hero.tag':  'सहायता केंद्र',
      'help.hero.h1':   'हम आपकी',
      'help.hero.h1.span': 'कैसे मदद करें?',
      'help.hero.p':    'नीचे जवाब खोजें या सीधे हमसे संपर्क करें।',
      'help.call.title':'सीधे कॉल करें',
      'help.call.sub':  '24/7 उपलब्ध · हम हमेशा यहाँ हैं',
      'help.call.btn':  'अभी कॉल करें',

      'help.faq.order':       '🛒 ऑर्डर संबंधित',
      'help.q1':  'क्या मैं अपना ऑर्डर कस्टमाइज़ कर सकता हूँ?',
      'help.a1':  'हाँ! ऑर्डर करते समय अपनी पसंद बताएं — हम पूरी कोशिश करेंगे। आप सीधे हमें कॉल भी कर सकते हैं।',
      'help.q2':  'मेरा ऑर्डर कितने समय में तैयार होगा?',
      'help.a2':  'अधिकतर ऑर्डर 10–20 मिनट में तैयार हो जाते हैं। व्यस्त समय में थोड़ा अधिक समय लग सकता है।',
      'help.q3':  'क्या मैं अपना ऑर्डर रद्द कर सकता हूँ?',
      'help.a3':  'रद्द करना केवल तैयारी शुरू होने से पहले स्वीकार किया जाता है। तुरंत +91 72909 45445 पर कॉल करें।',

      'help.faq.location':    '📍 समय & स्थान',
      'help.q4':  'आपके खुलने का समय क्या है?',
      'help.a4':  'स्पाइसी मस्ती 24/7 खुला है — हर दिन, दिन और रात। कोई छुट्टी नहीं, कोई बंद नहीं। 🌶️',
      'help.q5':  'आप कहाँ स्थित हैं?',
      'help.a5':  'आप Google Maps पर हमारा सटीक स्थान पा सकते हैं। मुख्य मेनू में स्थान विकल्प दबाएं।',

      'help.faq.payment':     '💳 भुगतान के तरीके',
      'help.q6':  'आप कौन से भुगतान तरीके स्वीकार करते हैं?',
      'help.a6':  'हम नकद, UPI (GPay, PhonePe, Paytm) और सभी डेबिट/क्रेडिट कार्ड स्वीकार करते हैं।',
      'help.q7':  'अगर गलत चार्ज हो तो?',
      'help.a7':  'तुरंत +91 72909 45445 पर कॉल करें या नीचे दिए फॉर्म में स्क्रीनशॉट के साथ संपर्क करें।',

      'help.form.label':  '✉️ हमें संदेश भेजें',
      'help.form.h3':     'और मदद चाहिए?',
      'help.form.p':      'सभी फ़ील्ड अनिवार्य हैं। फ़ॉर्म भरें और हम जल्द जवाब देंगे।',
      'help.form.name':   'आपका नाम',
      'help.form.phone':  'फ़ोन नंबर',
      'help.form.gmail':  'Gmail पता',
      'help.form.desc':   'समस्या बताएं',
      'help.form.images': 'छवियाँ संलग्न करें',
      'help.form.img.sub':'JPG, PNG, WEBP · अधिकतम 5 छवियाँ',
      'help.form.tap':    'छवियाँ अपलोड करने के लिए दबाएं',
      'help.form.btn':    'संदेश भेजें →',
      'help.form.name.ph':'जैसे राहुल शर्मा',
      'help.form.phone.ph':'10 अंकों का नंबर',
      'help.form.gmail.ph':'जैसे yourname@gmail.com',
      'help.form.desc.ph':'बताएं क्या हुआ या आपको किस चीज़ में मदद चाहिए...',
      'help.toast.ok':    '✅ संदेश भेज दिया गया! हम जल्द जवाब देंगे।',
      'help.toast.err':   '❌ भेजने में विफल। कृपया पुनः प्रयास करें।',

      // SETTINGS PAGE
      'set.hero.h1':    'सेटिंग्स',
      'set.hero.p':     'अपना स्पाइसी मस्ती अनुभव कस्टमाइज़ करें',
      'set.appear':     '🌙 स्वरूप',
      'set.light.title':'लाइट मोड',
      'set.light.sub':  'डार्क मोड पर स्विच करने के लिए दबाएं',
      'set.dark.title': 'डार्क मोड',
      'set.dark.sub':   'लाइट मोड पर स्विच करने के लिए दबाएं',
      'set.lang':       '🌐 भाषा',
      'set.lang.title': 'अपनी भाषा चुनें',
      'set.lang.sub':   'पसंदीदा भाषा चुनें',
      'set.info':       'ℹ️ ऐप जानकारी',
      'set.info.sub':   'क्लाउड किचन · फरीदाबाद',

      // OFFERS PAGE
      'offers.title':   'ऑफर & डील',
      'offers.h1':      'जल्द आ रहा है',
      'offers.p':       'हम आपके लिए शानदार ऑफर तैयार कर रहे हैं। जल्द वापस देखें!',
      'offers.btn':     '← मेनू पर वापस',
    }
  },

  // ── Get saved settings ──
  getSettings() {
    try {
      return JSON.parse(localStorage.getItem('smCustomerSettings')) || { lang: 'en', dark: false };
    } catch(e) { return { lang: 'en', dark: false }; }
  },

  // ── Save settings ──
  saveSettings(lang, dark) {
    localStorage.setItem('smCustomerSettings', JSON.stringify({ lang, dark }));
  },

  // ── Apply dark/light theme ──
  applyTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  },

  // ── Translate all [data-t] elements ──
  applyLang(lang) {
    const tr = this.translations[lang] || this.translations['en'];
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.getAttribute('data-t');
      if(tr[key] !== undefined) {
        // Handle placeholder separately
        if(el.hasAttribute('placeholder')) {
          el.placeholder = tr[key];
        } else {
          el.textContent = tr[key];
        }
      }
    });
    // Also update placeholders tagged with data-t-ph
    document.querySelectorAll('[data-t-ph]').forEach(el => {
      const key = el.getAttribute('data-t-ph');
      if(tr[key] !== undefined) el.placeholder = tr[key];
    });
    document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';
  },

  // ── Apply all on page load ──
  init() {
    const s = this.getSettings();
    this.applyTheme(s.dark);
    this.applyLang(s.lang);
    return s;
  }
};