// Quiz Data
const quizData = {
    8: [ // Bölüm 8: Neden Analizi
        {
            question: "Neden analizi, Performans İyileştirme/HPT Modelinin hangi aşamasındaki son adımdır?",
            options: ["Organizasyonel Analiz", "Performans Analizi", "Müdahale Seçimi", "Değerlendirme"],
            correct: 1
        },
        {
            question: "Gilbert'in geliştirdiği üç temel teoremden ilki nedir?",
            options: ["Bir Standarda Göre Ölçün", "Değer Başarı İçindedir", "Çevresel Nedenlere Karşı Bireysel Nedenleri Değerlendirin", "Performans Boşluğunu Belirle"],
            correct: 1
        },
        {
            question: "PIP kısaltması neyi ifade eder?",
            options: ["Performance Improvement Process", "Performansı İyileştirme Potansiyeli", "Personal Information Profile", "Performance Investigation Protocol"],
            correct: 1
        },
        {
            question: "Gilbert'in Davranış Mühendisliği Modeli (BEM) kaç hücre içerir?",
            options: ["4", "5", "6", "7"],
            correct: 2
        },
        {
            question: "BEM modelinde çevresel faktörleri temsil eden üç sistem hangisidir?",
            options: ["Bilgi, Kapasite, Güdüler", "Veriler, Enstrümantasyon, Teşvik", "Beceriler, Bilgi, Motivasyon", "Araçlar, Kaynaklar, Sonuçlar"],
            correct: 1
        },
        {
            question: "BEM modelinde bireysel faktörleri temsil eden üç sistem hangisidir?",
            options: ["Veriler, Enstrümantasyon, Teşvik", "Bilgi, Kapasite, Güdüler", "Araçlar, Kaynaklar, Sonuçlar", "Beklentiler, Geribildirim, Teşvikler"],
            correct: 1
        },
        {
            question: "Chevalier'in BEM modelinde yaptığı güncellemenin amacı neydi?",
            options: ["Modeli daha karmaşık hale getirmek", "Modeli daha bireysel, ekip ve organizasyon dostu hale getirmek", "Modeli sadeleştirmek", "Modeli tamamen yeniden yazmak"],
            correct: 1
        },
        {
            question: "Binder'ın Six Boxes™ Modelinde yer alan hücrelerden biri hangisidir?",
            options: ["Veriler ve Bilgiler", "Beklentiler ve Geribildirim", "Kapasite ve Yetenek", "Performans ve Sonuçlar"],
            correct: 1
        },
        {
            question: "Neden analizi yapmak için kullanılan adımlardan ilki hangisidir?",
            options: ["Nedeni sınıflandırın", "Performans boşluğunun nedenini belirleyin", "Öncelikle nedene göre sıralayın", "Neden örnekleri oluşturun"],
            correct: 1
        },
        {
            question: "Neden analizi için kullanılan tekniklerden hangisi doğrudur?",
            options: ["Sadece mülakat", "Mülakat, gözlem, anketler ve odak grupları", "Sadece anketler", "Sadece gözlem"],
            correct: 1
        },
        {
            question: "Çevresel destek eksikliğinde, Gilbert'e göre çevresel performans desteği hangilerini içerir?",
            options: ["Sadece bilgi", "Bilgi, enstrümantasyon ve motivasyon", "Sadece araçlar", "Sadece teşvikler"],
            correct: 1
        },
        {
            question: "Başarılı bir uygulayıcının ihtiyaç duyduğu veriler ve bilgiler hangi özellikte olmalıdır?",
            options: ["Sadece eksiksiz", "Eksiksiz, açık, kesin ve güncel", "Sadece güncel", "Sadece açık"],
            correct: 1
        },
        {
            question: "Performans için hayati öneme sahip veriler ve bilgiler arasında hangisi yer almaz?",
            options: ["Kurumsal politikalar", "İş prosedürleri", "Kişisel hobiler", "Müşteri gereksinimleri"],
            correct: 2
        },
        {
            question: "Geri bildirim eksikliği ne anlama gelir?",
            options: ["Çalışanların çok fazla bilgi alması", "Uygulayıcıların iş faaliyetlerinin sonuçları hakkında geri bildirim verilmemesi", "Sadece olumlu geri bildirim verilmesi", "Geri bildirimin çok hızlı verilmesi"],
            correct: 1
        },
        {
            question: "Çevre desteği, kaynaklar ve araçlar kapsamında hangi faktörler yer alır?",
            options: ["Sadece araçlar", "Ergonomik, sağlık, zindelik ve güvenlik faktörleri", "Sadece finansal kaynaklar", "Sadece teknolojik araçlar"],
            correct: 1
        },
        {
            question: "Kaynaklar performansa neyi ifade eder?",
            options: ["Sadece para", "Zaman, para, malzeme ve personel", "Sadece teknoloji", "Sadece bilgi"],
            correct: 1
        },
        {
            question: "Gilbert'in performansa dayalı teşvik türlerinden biri hangisidir?",
            options: ["Sadece parasal teşvikler", "Parasal teşvikler, parasal olmayan teşvikler ve kariyer geliştirme fırsatları", "Sadece kariyer fırsatları", "Sadece sözlü takdir"],
            correct: 1
        },
        {
            question: "Parasal performansa dayalı teşvik örneklerinden hangisi doğrudur?",
            options: ["Sadece maaş artışı", "Öneri sistemleri, kar paylaşımı, hisse senedi opsiyon primleri", "Sadece ikramiye", "Sadece ücretli izin"],
            correct: 1
        },
        {
            question: "Parasal olmayan performansa dayalı teşvik örneklerinden hangisi yanlıştır?",
            options: ["Ücretli izin", "Hediyeler", "Maaş artışı", "Özel park yerleri"],
            correct: 2
        },
        {
            question: "Gilbert'in PROBE modeli neyi sağlar?",
            options: ["Sadece performans ölçümü", "Performansın iyileştirilmesine yardımcı olan bir dizi soru", "Sadece eğitim programları", "Sadece değerlendirme kriterleri"],
            correct: 1
        },
        {
            question: "İşyeri performansını etkileyen bireysel davranış repertuarını oluşturan faktörlerden biri hangisidir?",
            options: ["Çevresel koşullar", "Bilgi (beceri ve bilgi)", "Organizasyonel kültür", "Fiziksel çevre"],
            correct: 1
        },
        {
            question: "'Yaşamları buna bağlıysa bunu yapabilirler mi?' sorusu hangi durumda sorulur?",
            options: ["Çevresel destek sorunu olduğunda", "Beceri veya bilgi eksikliği şüphesi olduğunda", "Motivasyon problemi olduğunda", "Kaynak yetersizliği olduğunda"],
            correct: 1
        },
        {
            question: "Beceri ve bilgi analizinde performans iyileştirme uygulayıcısının dikkate alması gereken sorulardan biri hangisidir?",
            options: ["Çalışan motive mi?", "Çalışan istediği gibi nasıl performans göstereceğini bir kez biliyor muydu?", "Çevre uygun mu?", "Araçlar yeterli mi?"],
            correct: 1
        },
        {
            question: "Bireysel kapasite neyi temsil eder?",
            options: ["Çalışanın motivasyonunu", "Bireyin işi yerine getirme yeteneğini", "Çalışanın bilgi seviyesini", "Çalışanın tecrübesini"],
            correct: 1
        },
        {
            question: "Yetenek eksikliği ne anlama gelir?",
            options: ["Eğitim eksikliği", "Çalışan seçimi sırasında bir hata yapıldığı", "Motivasyon eksikliği", "Çevresel destek yetersizliği"],
            correct: 1
        },
        {
            question: "Bireysel kapasite analizinde hangi açıdan bakılmalıdır?",
            options: ["Sadece beceri açısından", "Gerçekleştirme/öğrenme kapasitesi ve organizasyonel destek açısından", "Sadece motivasyon açısından", "Sadece çevresel faktörler açısından"],
            correct: 1
        },
        {
            question: "Gilbert'e göre motivasyon hangi durumda yüksek olacaktır?",
            options: ["Sadece para verildiğinde", "Diğer beş hücrenin tümü, özellikle çalışma ortamı ile ilgili olanlar sağlandığında", "Sadece takdir edildiğinde", "Sadece terfi verildiğinde"],
            correct: 1
        },
        {
            question: "Motivasyon ve beklenti analizi için ilk adımda sorulması gereken soru nedir?",
            options: ["Çalışan mutlu mu?", "Performans sistemi sıkıcı, ödüllendirici değil mi veya cezalandırıyor mu?", "Maaş yeterli mi?", "Çalışma saatleri uygun mu?"],
            correct: 1
        },
        {
            question: "Rossett'in 'iki sesle konuşan' şirketler hakkında bahsettiği caydırıcı yönlerden biri hangisidir?",
            options: ["Çok fazla teşvik verilmesi", "İstenen performansı göz ardı etmek", "Çok fazla eğitim verilmesi", "Aşırı denetim yapılması"],
            correct: 1
        },
        {
            question: "Neden analizi ve performans iyileştirme sürecinde en önemli nokta hangisidir?",
            options: ["Hızlı çözüm bulmak", "Semptomlar yerine gerçek nedenleri belirlemek", "En ucuz çözümü seçmek", "En popüler müdahaleyi uygulamak"],
            correct: 1
        }
    ],
    9: [ // Bölüm 9: Müdahale Seçimi
        {
            question: "Müdahale seçimi, performans iyileştirme aşamasının hangi bileşenlerini içerir?",
            options: ["Sadece müdahale tasarımı", "Müdahale tasarımı, geliştirme ve iş vakası oluşturma", "Sadece iş vakası oluşturma", "Sadece müdahale geliştirme"],
            correct: 1
        },
        {
            question: "Müdahaleler nasıl tanımlanır?",
            options: ["Rastgele eylemler", "Performanstaki değişimi kolaylaştıran kasıtlı, bilinçli eylemler", "Sadece eğitim faaliyetleri", "Sadece teknolojik çözümler"],
            correct: 1
        },
        {
            question: "Müdahale seçimi sürecinin temel amacı nedir?",
            options: ["En ucuz çözümü bulmak", "En uygun performans iyileştirme müdahalelerini belirlemek ve tavsiye etmek", "En hızlı çözümü bulmak", "En popüler müdahaleyi seçmek"],
            correct: 1
        },
        {
            question: "Müdahale seçiminde önerilen yaklaşım hangisidir?",
            options: ["Bireysel yaklaşım", "Ekip yaklaşımı", "Üst yönetim kararı", "Dış danışman kararı"],
            correct: 1
        },
        {
            question: "Performans iyileştirme uygulayıcılarının sahip olması gereken temel yeteneklerden biri hangisidir?",
            options: ["Sadece teknik bilgi", "Sağduyunun ötesine geçebilme", "Sadece iletişim becerisi", "Sadece analitik düşünme"],
            correct: 1
        },
        {
            question: "Uygulayıcıların bilmesi gereken dört temel yetkinlikten ilki hangisidir?",
            options: ["Mevcut olan çok çeşitli olası müdahaleleri bilme", "Bütçe yönetimi", "Proje yönetimi", "İletişim becerileri"],
            correct: 0
        },
        {
            question: "Şampiyonların performans geliştirmedeki rolü nedir?",
            options: ["Sadece finansal destek sağlama", "Performans geliştirmeye kendilerini adamış olmak", "Sadece rapor hazırlama", "Sadece eğitim verme"],
            correct: 1
        },
        {
            question: "Şampiyonun rollerinden hangisi doğrudur?",
            options: ["Sadece bütçe kontrolü", "Yön belirleme, yetki ve sorumluluk oluşturma", "Sadece personel yönetimi", "Sadece raporlama"],
            correct: 1
        },
        {
            question: "Ekip yaklaşımının avantajlarından biri hangisidir?",
            options: ["Daha hızlı karar verme", "Geniş bir destek tabanının olmasını sağlama", "Daha az maliyet", "Daha az zaman harcama"],
            correct: 1
        },
        {
            question: "Müdahale seçim sürecine ne zaman başlanmalıdır?",
            options: ["Problemin belirlenmesinden hemen sonra", "Sağlam bir performans analizinden sonra", "Bütçe onayından sonra", "Üst yönetim onayından sonra"],
            correct: 1
        },
        {
            question: "Müdahale seçim sürecinin kaç aşaması vardır?",
            options: ["2", "3", "4", "5"],
            correct: 1
        },
        {
            question: "Müdahale seçim sürecinin kaç ana adımı vardır?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "Ön Aşamanın amacı nedir?",
            options: ["Hızlı çözüm bulmak", "Dikkati semptomlardan ziyade performans problemlerine ve nedenlerine odaklamak", "Bütçe belirlemek", "Ekip oluşturmak"],
            correct: 1
        },
        {
            question: "Müdahale seçim sürecinin 1. ve 2. adımında ne yapılır?",
            options: ["Ekip oluşturma ve planlama", "Performans Boşluğunu ve Neden Analizini Doğrulama ve/veya Yürütme", "Bütçe belirleme ve onay alma", "Müdahale seçme ve uygulama"],
            correct: 1
        },
        {
            question: "Müdahale seçim ekibinin analiz yapması gereken durumlardan biri hangisidir?",
            options: ["Bütçe yetersiz olduğunda", "Müdahale seçiminden önce bir performans analizi yapılmamış olduğunda", "Personel değişikliği olduğunda", "Teknoloji değişikliği olduğunda"],
            correct: 1
        },
        {
            question: "Anket Aşaması hangi adımları içerir?",
            options: ["1-2 arası", "3-5 arası", "5-7 arası", "Tüm adımlar"],
            correct: 1
        },
        {
            question: "3. Adımda grup neyi yapar?",
            options: ["Sonuçları değerlendirir", "Olası müdahaleleri seçer", "Bütçe planlar", "Ekip oluşturur"],
            correct: 1
        },
        {
            question: "Müdahale Seçici Aracı (Performans Destek Aracı 9.4) ne için kullanılır?",
            options: ["Bütçe hesaplama", "Odaklanılması en olası kategorileri seçme", "Personel değerlendirme", "Zaman planlama"],
            correct: 1
        },
        {
            question: "4. Adımda her katılımcı kaç potansiyel müdahale seçer?",
            options: ["5-10", "10-15", "15-20", "20-25"],
            correct: 1
        },
        {
            question: "Seçim Aşamasının özelliği nedir?",
            options: ["Bireysel çalışma gerektirir", "Grup katılımını gerektirir", "Sadece yönetici kararı", "Sadece uzman kararı"],
            correct: 1
        },
        {
            question: "6. Adımda grup fikir birliğine varmak için ne kullanır?",
            options: ["Tek oylama", "Çoklu oylama", "Kura", "Uzman kararı"],
            correct: 1
        },
        {
            question: "Çoklu oylama sisteminde her ekip üyesinin kaç oyu vardır?",
            options: ["Sadece bir", "Birkaç oy", "Sınırsız oy", "İki oy"],
            correct: 1
        },
        {
            question: "Başarılı müdahale seçimi için önerilerden hangisi doğrudur?",
            options: ["Hızlı karar vermek", "Kararları durumun kapsamlı anlaşılmasına dayandırmak", "En ucuz seçeneği seçmek", "En popüler seçeneği seçmek"],
            correct: 1
        },
        {
            question: "Müdahale seçiminde 'doğru kişileri hedefleme' ne anlama gelir?",
            options: ["En üst düzey yöneticileri seçmek", "Doğru kişileri, doğru ortamda ve doğru zamanda hedeflemek", "En genç çalışanları seçmek", "Sadece uzmanları dahil etmek"],
            correct: 1
        },
        {
            question: "Başarılı müdahale seçiminde sponsorluk neden önemlidir?",
            options: ["Sadece finansal destek için", "Aktiviteyi destekleyecek bir sponsorunuz olması gerekir", "Sadece onay almak için", "Sadece rapor vermek için"],
            correct: 1
        },
        {
            question: "Müdahale seçiminde 'maliyeti dahil etme' ilkesi neyi vurgular?",
            options: ["Sadece en ucuz seçeneği seçmek", "Maliyeti dahil etmek ve değere duyarlı olmak", "Sadece pahalı çözümleri tercih etmek", "Bütçeyi göz ardı etmek"],
            correct: 1
        },
        {
            question: "Müdahale seçiminde uzun vadeli ve kısa vadeli etkililiklerin değerlendirilmesi neden önemlidir?",
            options: ["Sadece hızlı sonuç almak için", "Değişiklik için birden fazla strateji kullanmak ve müdahalelerin yeterince güçlü olması için", "Sadece maliyet düşürmek için", "Sadece kolay uygulama için"],
            correct: 1
        },
        {
            question: "Müdahalelerin 'kurumsallaşması' ne anlama gelir?",
            options: ["Sadece politika haline gelmesi", "Zaman içinde örgütün kültüründe yerleşmesi ve sürdürülebilir olması", "Sadece prosedür haline gelmesi", "Sadece kayıt altına alınması"],
            correct: 1
        },
        {
            question: "Müdahale seçiminde 'uygulanabilirlik' değerlendirmesi neyi içerir?",
            options: ["Sadece teknik açıdan mümkün olması", "İnsan kaynakları, kurumsal destek, maliyet ve değer açısından etkin olması", "Sadece kolay uygulanması", "Sadece hızlı sonuç vermesi"],
            correct: 1
        },
        {
            question: "7. Adımda grup ne yapar?",
            options: ["Müdahaleyi uygular", "Sonraki adımları planlar", "Performans analizini tekrarlar", "Bütçeyi onaylar"],
            correct: 1
        }
    ]
};

// Quiz State
let currentChapter = 8;
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];
let showingReview = false;
let shuffledQuestions = [];
let isTransitioning = false;

// DOM Elements
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const progressFill = document.getElementById('progress-fill');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentChapterDisplay = document.getElementById('current-chapter');
const resultsContainer = document.getElementById('results');
const finalScore = document.getElementById('final-score');
const scoreDetails = document.getElementById('score-details');

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function createShuffledQuestions(questions) {
    return questions.map(question => {
        const correctAnswer = question.options[question.correct];
        const shuffledOptions = shuffleArray(question.options);
        const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
        
        return {
            ...question,
            options: shuffledOptions,
            correct: newCorrectIndex,
            originalCorrect: question.correct
        };
    });
}

function animateTransition(element, className, duration = 300) {
    return new Promise(resolve => {
        element.classList.add(className);
        setTimeout(() => {
            element.classList.remove(className);
            resolve();
        }, duration);
    });
}

// Quiz Functions
function initQuiz() {
    if (isTransitioning) return;
    isTransitioning = true;

    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = [];
    showingReview = false;
    
    // Create shuffled questions for current chapter
    shuffledQuestions = createShuffledQuestions(quizData[currentChapter]);
    
    // Reset UI
    resultsContainer.classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    document.querySelector('.controls').classList.remove('hidden');
    
    // Animate transition
    animateTransition(document.getElementById('question-container'), 'fade-in')
        .then(() => {
            updateDisplay();
            loadQuestion();
            isTransitioning = false;
        });
}

function selectChapter(chapter) {
    if (isTransitioning) return;
    isTransitioning = true;

    currentChapter = chapter;
    
    // Update button styles with animation
    document.querySelectorAll('.chapter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update chapter display
    const chapterNames = {
        8: 'Bölüm 8: Neden Analizi',
        9: 'Bölüm 9: Müdahale Seçimi'
    };
    currentChapterDisplay.textContent = chapterNames[chapter];
    
    // Reset quiz with animation
    animateTransition(document.getElementById('question-container'), 'fade-out')
        .then(() => {
            initQuiz();
        });
}

function loadQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    questionText.textContent = question.question;
    
    // Clear options with animation
    optionsContainer.innerHTML = '';
    
    // Create options with staggered animation
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.style.opacity = '0';
        optionElement.style.transform = 'translateX(-20px)';
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
        
        // Animate each option
        setTimeout(() => {
            optionElement.style.transition = 'all 0.3s ease';
            optionElement.style.opacity = '1';
            optionElement.style.transform = 'translateX(0)';
        }, index * 100);
    });
    
    // Reset selection
    selectedAnswer = null;
    updateNavigationButtons();
}

function selectOption(index) {
    if (isTransitioning) return;
    
    selectedAnswer = index;
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = index === currentQuestion.correct;
    
    // Update option styles with animation
    document.querySelectorAll('.option').forEach((option, i) => {
        option.classList.remove('selected', 'correct', 'incorrect');
        if (i === index) {
            option.classList.add('selected');
            if (isCorrect) {
                option.classList.add('correct');
                // Show success message
                showFeedback('Doğru!', 'success');
            } else {
                option.classList.add('incorrect');
                // Show error message and highlight correct answer
                showFeedback('Yanlış!', 'error');
                document.querySelectorAll('.option')[currentQuestion.correct].classList.add('correct');
            }
        }
    });
    
    // Disable all options after selection
    document.querySelectorAll('.option').forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Enable next button after a short delay
    setTimeout(() => {
        updateNavigationButtons();
    }, 1000);
}

// Add feedback message function
function showFeedback(message, type) {
    // Remove existing feedback if any
    const existingFeedback = document.querySelector('.feedback-message');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.className = `feedback-message ${type}`;
    feedback.textContent = message;
    
    // Add to DOM
    document.querySelector('.question-container').appendChild(feedback);
    
    // Animate in
    setTimeout(() => {
        feedback.style.opacity = '1';
        feedback.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after delay
    setTimeout(() => {
        feedback.style.opacity = '0';
        feedback.style.transform = 'translateY(-20px)';
        setTimeout(() => feedback.remove(), 300);
    }, 2000);
}

function updateDisplay() {
    const totalQuestions = shuffledQuestions.length;
    
    questionCounter.textContent = `${currentQuestionIndex + 1} / ${totalQuestions}`;
    scoreDisplay.textContent = score;
    
    const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressFill.style.width = `${progressPercent}%`;
}

function updateNavigationButtons() {
    const totalQuestions = shuffledQuestions.length;
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.textContent = selectedAnswer !== null ? 'Bitir' : 'Sonraki';
    } else {
        nextBtn.textContent = 'Sonraki';
    }
    
    nextBtn.disabled = selectedAnswer === null;
}

function previousQuestion() {
    if (isTransitioning || currentQuestionIndex === 0) return;
    isTransitioning = true;

    currentQuestionIndex--;
    
    // Animate transition
    animateTransition(document.getElementById('question-container'), 'slide-right')
        .then(() => {
            updateDisplay();
            loadQuestion();
            
            // Restore previous answer if exists
            if (userAnswers[currentQuestionIndex] !== undefined) {
                selectOption(userAnswers[currentQuestionIndex]);
            }
            isTransitioning = false;
        });
}

function nextQuestion() {
    if (isTransitioning || selectedAnswer === null) return;
    isTransitioning = true;

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    
    // Store user answer
    userAnswers[currentQuestionIndex] = selectedAnswer;
    
    // Check if answer is correct
    if (selectedAnswer === currentQuestion.correct) {
        score++;
    }
    
    // Animate transition
    animateTransition(document.getElementById('question-container'), 'slide-left')
        .then(() => {
            // Move to next question or finish
            if (currentQuestionIndex < shuffledQuestions.length - 1) {
                currentQuestionIndex++;
                updateDisplay();
                loadQuestion();
                
                // Reset option states
                document.querySelectorAll('.option').forEach(option => {
                    option.style.pointerEvents = 'auto';
                    option.classList.remove('selected', 'correct', 'incorrect');
                });
            } else {
                finishQuiz();
            }
            isTransitioning = false;
        });
}

function finishQuiz() {
    const totalQuestions = shuffledQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Hide question container and controls with animation
    document.getElementById('question-container').classList.add('hidden');
    document.querySelector('.controls').classList.add('hidden');
    
    // Show results with animation
    resultsContainer.classList.remove('hidden');
    finalScore.textContent = `${percentage}%`;
    scoreDetails.textContent = `${totalQuestions} sorudan ${score} doğru`;
    
    // Update score color based on performance
    if (percentage >= 80) {
        finalScore.style.color = '#4CAF50';
    } else if (percentage >= 60) {
        finalScore.style.color = '#ff9800';
    } else {
        finalScore.style.color = '#f44336';
    }
    
    // Animate score
    animateTransition(finalScore, 'bounce');
}

function resetQuiz() {
    if (isTransitioning) return;
    
    // Show confirmation dialog
    if (confirm('Quizi sıfırlamak istediğinizden emin misiniz?')) {
        initQuiz();
    }
}

function showReview() {
    if (isTransitioning) return;
    isTransitioning = true;

    showingReview = true;
    currentQuestionIndex = 0;
    
    // Hide results with animation
    resultsContainer.classList.add('hidden');
    
    // Show question container with animation
    document.getElementById('question-container').classList.remove('hidden');
    document.querySelector('.controls').classList.remove('hidden');
    
    // Change navigation buttons for review mode
    nextBtn.textContent = 'Sonraki';
    
    // Animate transition
    animateTransition(document.getElementById('question-container'), 'fade-in')
        .then(() => {
            loadReviewQuestion();
            isTransitioning = false;
        });
}

function loadReviewQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    const correctAnswer = question.correct;
    
    questionText.textContent = question.question;
    
    // Clear options
    optionsContainer.innerHTML = '';
    
    // Create options with review styling and animation
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.style.opacity = '0';
        optionElement.style.transform = 'translateX(-20px)';
        
        // Add review styling
        if (index === correctAnswer) {
            optionElement.classList.add('correct');
        } else if (index === userAnswer && userAnswer !== correctAnswer) {
            optionElement.classList.add('incorrect');
        }
        
        optionsContainer.appendChild(optionElement);
        
        // Animate each option
        setTimeout(() => {
            optionElement.style.transition = 'all 0.3s ease';
            optionElement.style.opacity = '1';
            optionElement.style.transform = 'translateX(0)';
        }, index * 100);
    });
    
    updateReviewNavigation();
}

function updateReviewNavigation() {
    const totalQuestions = shuffledQuestions.length;
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === totalQuestions - 1;
    
    if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.textContent = 'Bitir';
    } else {
        nextBtn.textContent = 'Sonraki';
    }
}

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            previousQuestion();
        } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            nextQuestion();
        } else if (e.key >= '1' && e.key <= '4') {
            const index = parseInt(e.key) - 1;
            if (index < shuffledQuestions[currentQuestionIndex].options.length) {
                selectOption(index);
            }
        }
    });
});