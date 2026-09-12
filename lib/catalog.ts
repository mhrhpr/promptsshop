export type Role = {
  id: string; name: string; dept: string; summary: string; tasks: string[]; icon: string
}

export type Workflow = {
  id: string; title: string; role: string; dept: string; free: boolean; outcome: string; description: string
}

export const roles: Role[] = [
  { id:'HR-HRMANAGER', name:'مدیر منابع انسانی', dept:'People / HR', summary:'تصمیم‌گیری سریع‌تر درباره نیروی انسانی، عملکرد و ریسک‌های people.', tasks:['تحلیل ترک خدمت','بررسی عملکرد','برنامه‌ریزی نیروی انسانی'], icon:'HR' },
  { id:'FIN-FINANALYST', name:'تحلیلگر مالی', dept:'Finance & Accounting', summary:'از اعداد خام به تحلیل مدیریتی، variance و سناریو.', tasks:['تحلیل انحراف','پیش‌بینی','گزارش مدیریتی'], icon:'₣' },
  { id:'SALES-SALESMANAGER', name:'مدیر فروش', dept:'Sales & Business Development', summary:'Pipeline، forecast و deal diagnosis را در چند دقیقه جمع‌بندی کن.', tasks:['تحلیل pipeline','Forecast فروش','تشخیص deal'], icon:'S' },
  { id:'MKT-MKTMANAGER', name:'مدیر بازاریابی', dept:'Marketing & Communications', summary:'از داده کمپین تا insight، experiment و action plan.', tasks:['تحلیل کمپین','Segment بازار','Conversion'], icon:'M' },
  { id:'OPS-OPSMANAGER', name:'مدیر عملیات', dept:'Operations', summary:'گلوگاه، ظرفیت، SLA و اقدام اصلاحی را روشن کن.', tasks:['تحلیل گلوگاه','ظرفیت‌سنجی','Root Cause'], icon:'O' },
  { id:'SC-SCMANAGER', name:'مدیر زنجیره تأمین', dept:'Supply Chain & Procurement', summary:'ریسک تأمین، موجودی و برنامه‌ریزی را به تصمیم تبدیل کن.', tasks:['تحلیل تأمین‌کننده','موجودی','برنامه‌ریزی تقاضا'], icon:'SC' },
  { id:'DATA-DATAANALYST', name:'تحلیلگر داده', dept:'Data & Analytics', summary:'KPI، anomaly، trend و تصمیم را در یک workflow یکپارچه کن.', tasks:['Data Quality','Anomaly Detection','Decision Analysis'], icon:'D' },
  { id:'PROD-PRODMANAGER', name:'مدیر محصول', dept:'Product Management', summary:'Problem، backlog، experiment و product decision را سریع‌تر بساز.', tasks:['Problem framing','Prioritization','Product KPI'], icon:'P' },
]

export const workflows: Workflow[] = [
  { id:'HR-TURNOVER', title:'Employee Turnover Diagnosis', role:'مدیر منابع انسانی', dept:'People / HR', free:true, outcome:'دلایل محتمل ترک خدمت + بخش‌های پرریسک + اقدام پیشنهادی', description:'داده خروج کارکنان را به یک تحلیل مدیریتی قابل ارائه تبدیل کن.' },
  { id:'HR-PERFORMANCE', title:'Employee Performance Review', role:'مدیر منابع انسانی', dept:'People / HR', free:true, outcome:'جمع‌بندی عملکرد + نقاط قوت/ضعف + اقدام بعدی', description:'بازخوردها و داده عملکرد را ساختاریافته و قابل استفاده کن.' },
  { id:'HR-CANDIDATE', title:'Recruitment Candidate Analysis', role:'مدیر منابع انسانی', dept:'People / HR', free:true, outcome:'Scorecard نامزد + evidence + ریسک‌ها + پیشنهاد مصاحبه', description:'رزومه و شرح شغل را به یک تصمیم اولیه قابل دفاع تبدیل کن.' },
  { id:'HR-WORKFORCE', title:'Workforce Planning', role:'مدیر منابع انسانی', dept:'People / HR', free:false, outcome:'سناریوی نیروی انسانی + شکاف ظرفیت + اولویت استخدام', description:'نیاز نیروی انسانی را با سناریوهای قابل دفاع مدل کن.' },
  { id:'FIN-VARIANCE', title:'Financial Variance Analysis', role:'تحلیلگر مالی', dept:'Finance & Accounting', free:true, outcome:'مهم‌ترین انحراف‌ها + driverها + پیشنهاد اقدام', description:'بودجه و عملکرد واقعی را برای مدیریت مقایسه کن.' },
  { id:'SALES-PIPELINE', title:'Sales Pipeline Review', role:'مدیر فروش', dept:'Sales & Business Development', free:true, outcome:'ریسک pipeline + فرصت‌های high-impact + اقدام هفتگی', description:'Pipeline خام را به review مدیریتی تبدیل کن.' },
  { id:'MKT-CAMPAIGN', title:'Campaign Analysis', role:'مدیر بازاریابی', dept:'Marketing & Communications', free:true, outcome:'کانال‌های مؤثر + افت funnel + experimentهای بعدی', description:'داده کمپین را با نگاه تصمیم‌گیری تحلیل کن.' },
  { id:'OPS-BOTTLENECK', title:'Bottleneck Analysis', role:'مدیر عملیات', dept:'Operations', free:false, outcome:'گلوگاه اصلی + root cause + طرح اصلاحی', description:'فرآیند را از روی داده و توضیحات عملیاتی diagnose کن.' },
  { id:'DATA-QUALITY', title:'Data Quality Review', role:'تحلیلگر داده', dept:'Data & Analytics', free:true, outcome:'خطاهای data + اثر احتمالی + اولویت اصلاح', description:'کیفیت داده را پیش از تصمیم‌گیری بررسی کن.' },
]
