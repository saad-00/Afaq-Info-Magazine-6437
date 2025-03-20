/**
 * research.js - JavaScript file for managing research papers
 * This handles the dynamic functionality of the research papers page
 */

// Research Papers Data Structure - For GitHub Pages integration
const researchData = {
    // Information Organization Sector
    organization: {
        "1446": [
            {
                id: "org-1446-1",
                title: "نظم تصنيف المعلومات الذكية: دراسة تحليلية للمعايير المستخدمة",
                author: "د. أحمد محمد السعيدي",
                date: "شوال 1446",
                pages: 25,
                abstract: "تتناول هذه الدراسة معايير تصنيف المعلومات الذكية وتحليل الأنظمة المستخدمة في المكتبات ومراكز المعلومات المتطورة، مع التركيز على التقنيات الحديثة والذكاء الاصطناعي في فهرسة وتنظيم المعلومات.",
                downloads: 45,
                filename: "organization/1446/intelligent_classification_systems.pdf"
            },
            {
                id: "org-1446-2",
                title: "التصنيف الموضوعي الإلكتروني للوثائق العربية: التحديات والحلول",
                author: "د. فاطمة عبدالله الزهراني",
                date: "رجب 1446",
                pages: 32,
                abstract: "تستعرض هذه الدراسة التحديات التي تواجه التصنيف الموضوعي الإلكتروني للوثائق العربية في العصر الرقمي، وتقترح حلولاً عملية لتحسين كفاءة نظم الفهرسة والتصنيف.",
                downloads: 37,
                filename: "organization/1446/arabic_electronic_classification.pdf"
            },
            {
                id: "org-1446-3",
                title: "عنوان البحث الجديد",
                author: "د. اسم المؤلف",
                date: "ربيع الأول 1446",
                pages: 30,
                abstract: "ملخص البحث الجديد. يمكنك كتابة وصف مختصر للبحث هنا لتوضيح محتواه للقراء.",
                downloads: 0,
                filename: "organization/1446/new_research_paper.pdf"
            }
        ],
        "1445": [
            {
                id: "org-1445-1",
                title: "مستقبل علم التصنيف في ظل التطورات التكنولوجية الحديثة",
                author: "د. سارة محمد العتيبي",
                date: "ذو الحجة 1445",
                pages: 28,
                abstract: "تبحث هذه الدراسة في آفاق مستقبل علم التصنيف في ظل الثورة الرقمية والتطورات التكنولوجية، وتناقش تأثير الذكاء الاصطناعي وتعلم الآلة على أنظمة تصنيف المعلومات.",
                downloads: 56,
                filename: "organization/1445/future_of_classification.pdf"
            }
        ],
        "1444": [
            {
                id: "org-1444-1",
                title: "تقييم أنظمة تكشيف المعلومات في المكتبات الجامعية السعودية",
                author: "د. عبدالرحمن أحمد المالكي",
                date: "صفر 1444",
                pages: 30,
                abstract: "تهدف هذه الدراسة إلى تقييم أنظمة تكشيف المعلومات المستخدمة في المكتبات الجامعية بالمملكة العربية السعودية، وتحليل مدى فعاليتها في تلبية احتياجات المستفيدين.",
                downloads: 43,
                filename: "organization/1444/saudi_indexing_evaluation.pdf"
            }
        ],
        "1443": [
            {
                id: "org-1443-1",
                title: "تقييم أنظمة تكشيف المعلومات في المكتبات الجامعية السعودية",
                author: "د. عبدالرحمن أحمد المالكي",
                date: "صفر 1443",
                pages: 30,
                abstract: "تهدف هذه الدراسة إلى تقييم أنظمة تكشيف المعلومات المستخدمة في المكتبات الجامعية بالمملكة العربية السعودية، وتحليل مدى فعاليتها في تلبية احتياجات المستفيدين.",
                downloads: 43,
                filename: "organization/1443/1443_alsaidi_intelligent.pdf"
            }
        ]
    },

    // Information Sources Sector
    sources: {
        "1446": [
            {
                id: "src-1446-1",
                title: "اتجاهات استخدام مصادر المعلومات الرقمية في البحث العلمي",
                author: "د. نورة سعد القحطاني",
                date: "محرم 1446",
                pages: 27,
                abstract: "تستعرض هذه الدراسة اتجاهات استخدام مصادر المعلومات الرقمية في البحث العلمي لدى طلاب الدراسات العليا، وتحليل مدى اعتمادهم على المصادر الإلكترونية مقارنة بالمصادر التقليدية.",
                downloads: 62,
                filename: "sources/1446/digital_sources_usage.pdf"
            }
        ],
        "1445": [
            {
                id: "src-1445-1",
                title: "تقييم جودة مصادر المعلومات المفتوحة: دراسة تحليلية",
                author: "د. محمد عبدالله الغامدي",
                date: "شعبان 1445",
                pages: 35,
                abstract: "تقدم هذه الدراسة تقييماً شاملاً لجودة مصادر المعلومات المفتوحة المتاحة على الإنترنت، وتحليل معايير موثوقيتها وصلاحيتها للاستخدام في الأبحاث الأكاديمية.",
                downloads: 41,
                filename: "sources/1445/open_sources_quality.pdf"
            }
        ],
        "1444": [],
        "1443": [
            {
                id: "src-1443-1",
                title: "استخدام المستودعات الرقمية في الجامعات السعودية: الواقع والمأمول",
                author: "د. خالد سليمان الحربي",
                date: "ربيع الأول 1443",
                pages: 29,
                abstract: "تتناول هذه الدراسة واقع استخدام المستودعات الرقمية في الجامعات السعودية، وتحليل مستوى الإفادة منها في دعم البحث العلمي، مع تقديم تصور مقترح لتطوير هذه المستودعات.",
                downloads: 78,
                filename: "sources/1443/saudi_digital_repositories.pdf"
            }
        ]
    },

    // Information Services Sector
    services: {
        "1446": [],
        "1445": [
            {
                id: "svc-1445-1",
                title: "تطبيقات الذكاء الاصطناعي في خدمات المعلومات بالمكتبات الجامعية",
                author: "د. هاني مصطفى النجار",
                date: "رمضان 1445",
                pages: 38,
                abstract: "تستعرض هذه الدراسة تطبيقات الذكاء الاصطناعي وأنظمة المساعدة الافتراضية في تقديم خدمات المعلومات بالمكتبات الجامعية، مع تحليل تجارب عالمية رائدة في هذا المجال.",
                downloads: 83,
                filename: "services/1445/ai_in_library_services.pdf"
            }
        ],
        "1444": [
            {
                id: "svc-1444-1",
                title: "خدمات المعلومات الافتراضية في ظل جائحة كورونا: دراسة ميدانية",
                author: "د. منى إبراهيم الشمري",
                date: "جمادى الآخرة 1444",
                pages: 34,
                abstract: "تناقش هذه الدراسة تحول خدمات المعلومات إلى النمط الافتراضي خلال جائحة كورونا، وتأثير ذلك على كفاءة تقديم الخدمات وإمكانية الاستفادة من هذه التجربة في فترة ما بعد الجائحة.",
                downloads: 92,
                filename: "services/1444/virtual_info_services_covid.pdf"
            }
        ],
        "1443": [
            {
                id: "svc-1443-1",
                title: "قياس جودة خدمات المعلومات في المكتبات الجامعية السعودية",
                author: "د. عبير أحمد الشهري",
                date: "ذو القعدة 1443",
                pages: 31,
                abstract: "تهدف هذه الدراسة إلى قياس جودة خدمات المعلومات المقدمة في المكتبات الجامعية السعودية باستخدام نموذج LibQUAL، وتحليل مستوى رضا المستفيدين عن هذه الخدمات.",
                downloads: 67,
                filename: "services/1443/service_quality_measurement.pdf"
            }
        ]
    },

    // Information Technology Sector
    technology: {
        "1446": [
            {
                id: "tech-1446-1",
                title: "استخدام تقنية البلوكتشين في إدارة حقوق الملكية الفكرية للمحتوى الرقمي",
                author: "د. علي حسن المحمدي",
                date: "جمادى الأولى 1446",
                pages: 36,
                abstract: "تتناول هذه الدراسة إمكانية استخدام تقنية البلوكتشين في حماية حقوق الملكية الفكرية للمحتوى الرقمي، وتقديم نموذج مقترح لتطبيق هذه التقنية في المكتبات ومراكز المعلومات.",
                downloads: 59,
                filename: "technology/1446/blockchain_intellectual_property.pdf"
            }
        ],
        "1445": [
            {
                id: "tech-1445-1",
                title: "تطبيقات إنترنت الأشياء في مراكز المعلومات والمكتبات الذكية",
                author: "د. فهد خالد الدوسري",
                date: "محرم 1445",
                pages: 33,
                abstract: "تستعرض هذه الدراسة تطبيقات تقنية إنترنت الأشياء في تطوير مراكز المعلومات والمكتبات الذكية، وتحليل تجارب عالمية رائدة في هذا المجال، مع تقديم تصور مقترح للتطبيق محلياً.",
                downloads: 75,
                filename: "technology/1445/iot_in_smart_libraries.pdf"
            }
        ],
        "1444": [
            {
                id: "tech-1444-1",
                title: "تطبيقات الواقع المعزز في مراكز مصادر التعلم: دراسة تجريبية",
                author: "د. نوف سعد العتيبي",
                date: "ربيع الثاني 1444",
                pages: 29,
                abstract: "تهدف هذه الدراسة إلى تحليل تطبيقات الواقع المعزز في مراكز مصادر التعلم وتأثيرها على تجربة المستفيدين، مع دراسة تجريبية لتطبيق تقنية الواقع المعزز في مركز مصادر التعلم بجامعة طيبة.",
                downloads: 68,
                filename: "technology/1444/augmented_reality_learning.pdf"
            }
        ],
        "1443": [
            {
                id: "tech-1443-1",
                title: "تحليل البيانات الضخمة ودورها في تطوير خدمات المكتبات الرقمية",
                author: "د. هدى إبراهيم الخالدي",
                date: "شوال 1443",
                pages: 37,
                abstract: "تتناول هذه الدراسة دور تحليل البيانات الضخمة في تطوير خدمات المكتبات الرقمية، وتقديم نماذج عملية لتوظيف تقنيات تحليل البيانات في تحسين تجربة المستفيدين وصناعة القرار.",
                downloads: 86,
                filename: "technology/1443/big_data_digital_libraries.pdf"
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Load research papers dynamically
    initializeResearchPage();

    // Implement search functionality
    setupSearch();

    // Implement download tracking
    setupDownloadTracking();
});

/**
 * Initialize the research page with dynamic content
 */
function initializeResearchPage() {
    // For each sector and year, render the research papers
    for (const sector in researchData) {
        for (const year in researchData[sector]) {
            const papers = researchData[sector][year];
            
            // تعديل معرّف العنصر الهدف ليتناسب مع HTML
            const targetElement = document.getElementById(`${sector}-${year}`);
            
            if (!targetElement) {
                // محاولة ثانية بصيغة معرّف مختلفة
                const altTargetId = getSectorPrefix(sector) + "-" + year;
                const altTargetElement = document.getElementById(altTargetId);
                
                if (altTargetElement) {
                    renderPapers(altTargetElement, papers);
                } else {
                    console.error(`لم يتم العثور على عنصر بمعرّف ${sector}-${year} أو ${altTargetId}`);
                }
            } else {
                renderPapers(targetElement, papers);
            }
        }
    }
}

/**
 * Get sector prefix for HTML IDs
 */
function getSectorPrefix(sector) {
    switch(sector) {
        case 'organization': return 'org';
        case 'sources': return 'src';
        case 'services': return 'svc';
        case 'technology': return 'tech';
        default: return sector;
    }
}

/**
 * Render papers into target element
 */
function renderPapers(targetElement, papers) {
    // Clear any existing content
    targetElement.innerHTML = '';
    
    // If no papers for this year/sector, show empty state
    if (papers.length === 0) {
        targetElement.innerHTML = `
            <div class="empty-state">
                <i class="far fa-folder-open"></i>
                <h5>لا توجد أبحاث متاحة لهذه السنة</h5>
                <p>يمكنك استعراض السنوات الأخرى أو قم بالبحث عن موضوع محدد</p>
            </div>
        `;
        return;
    }
    
    // Render each paper
    papers.forEach(paper => {
        const paperElement = createResearchPaperElement(paper);
        targetElement.appendChild(paperElement);
    });
}

/**
 * Create a DOM element for a research paper
 * @param {Object} paper The research paper data
 * @returns {HTMLElement} The research paper card element
 */
function createResearchPaperElement(paper) {
    const paperElement = document.createElement('div');
    paperElement.className = 'research-card';
    paperElement.dataset.paperId = paper.id;
    
    paperElement.innerHTML = `
        <h5 class="research-title">${paper.title}</h5>
        <div class="research-author">
            <i class="fas fa-user-edit me-2"></i>${paper.author}
        </div>
        <div class="research-meta">
            <span class="me-3"><i class="far fa-calendar-alt me-1"></i>${paper.date}</span>
            <span><i class="fas fa-file-pdf me-1"></i>${paper.pages} صفحة</span>
        </div>
        <p class="research-abstract">
            ${paper.abstract}
        </p>
        <div class="d-flex justify-content-between align-items-center">
            <a href="downloads/${paper.filename}" class="btn btn-primary download-btn" data-research-id="${paper.id}">
                <i class="fas fa-download"></i>
                تحميل البحث
            </a>
            <span class="download-count">
                <i class="fas fa-chart-line me-1"></i>${paper.downloads} تحميل
            </span>
        </div>
    `;
    
    return paperElement;
}

/**
 * Setup the search functionality
 */
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchValue = this.value.toLowerCase();
            
            // For each sector and year, filter the research papers
            for (const sector in researchData) {
                for (const year in researchData[sector]) {
                    const papers = researchData[sector][year];
                    
                    // تجربة كلا المعرّفين المحتملين
                    let targetElement = document.getElementById(`${sector}-${year}`);
                    if (!targetElement) {
                        const altTargetId = getSectorPrefix(sector) + "-" + year;
                        targetElement = document.getElementById(altTargetId);
                    }
                    
                    if (targetElement) {
                        const paperElements = targetElement.querySelectorAll('.research-card');
                        let visibleCount = 0;
                        
                        // Filter papers
                        paperElements.forEach((paperElement, index) => {
                            if (index < papers.length) {
                                const paper = papers[index];
                                
                                if (paper) {
                                    const matchesSearch = 
                                        paper.title.toLowerCase().includes(searchValue) ||
                                        paper.author.toLowerCase().includes(searchValue) ||
                                        paper.abstract.toLowerCase().includes(searchValue);
                                    
                                    if (matchesSearch) {
                                        paperElement.style.display = 'block';
                                        visibleCount++;
                                    } else {
                                        paperElement.style.display = 'none';
                                    }
                                }
                            }
                        });
                        
                        // Show empty state if no results
                        const existingEmptyState = targetElement.querySelector('.search-empty');
                        
                        if (visibleCount === 0 && papers.length > 0) {
                            // Only add if we don't already have one
                            if (!existingEmptyState) {
                                const emptyState = document.createElement('div');
                                emptyState.className = 'empty-state search-empty';
                                emptyState.innerHTML = `
                                    <i class="fas fa-search"></i>
                                    <h5>لا توجد نتائج للبحث</h5>
                                    <p>حاول استخدام كلمات بحث أخرى أو استعرض جميع الأبحاث</p>
                                `;
                                
                                targetElement.appendChild(emptyState);
                            }
                        } else if (existingEmptyState) {
                            // Remove empty state if we have results
                            existingEmptyState.remove();
                        }
                    }
                }
            }
        });
    }
}

/**
 * Setup tracking for downloads
 * For GitHub Pages, this would be client-side only
 * In a production environment, you would implement server-side tracking
 */
function setupDownloadTracking() {
    document.addEventListener('click', function(e) {
        // تحديث المحدد ليعمل مع العناصر التي تمت إضافتها ديناميكيًا
        if (e.target.closest('.download-btn')) {
            const button = e.target.closest('.download-btn');
            // Get the research ID
            const researchId = button.getAttribute('data-research-id');
            
            // Find which sector and year this belongs to
            let paperData = null;
            
            for (const sector in researchData) {
                for (const year in researchData[sector]) {
                    const found = researchData[sector][year].find(paper => paper.id === researchId);
                    
                    if (found) {
                        paperData = found;
                        // Increment download count
                        found.downloads++;
                        
                        // Update the display
                        const countElement = button.parentElement.querySelector('.download-count');
                        if (countElement) {
                            countElement.innerHTML = `
                                <i class="fas fa-chart-line me-1"></i>${found.downloads} تحميل
                            `;
                        }
                        
                        break;
                    }
                }
                
                if (paperData) break;
            }
            
            // Save the updated download counts to localStorage
            localStorage.setItem('researchDownloads', JSON.stringify(
                Object.entries(researchData).reduce((acc, [sector, years]) => {
                    acc[sector] = Object.entries(years).reduce((yearAcc, [year, papers]) => {
                        yearAcc[year] = papers.map(paper => ({
                            id: paper.id,
                            downloads: paper.downloads
                        }));
                        return yearAcc;
                    }, {});
                    return acc;
                }, {})
            ));
            
            // Allow the default action (download) to continue
        }
    });
    
    // Load saved download counts from localStorage
    const savedDownloads = localStorage.getItem('researchDownloads');
    
    if (savedDownloads) {
        try {
            const downloadsData = JSON.parse(savedDownloads);
            
            // Update the researchData object with saved downloads
            for (const sector in downloadsData) {
                for (const year in downloadsData[sector]) {
                    downloadsData[sector][year].forEach(savedPaper => {
                        const paperToUpdate = researchData[sector][year].find(paper => paper.id === savedPaper.id);
                        
                        if (paperToUpdate) {
                            paperToUpdate.downloads = savedPaper.downloads;
                        }
                    });
                }
            }
            
            // Update the display for any existing elements
            document.querySelectorAll('.download-count').forEach(countElement => {
                const researchId = countElement.parentElement.querySelector('.download-btn').getAttribute('data-research-id');
                
                // Find which sector and year this belongs to
                for (const sector in researchData) {
                    for (const year in researchData[sector]) {
                        const found = researchData[sector][year].find(paper => paper.id === researchId);
                        
                        if (found) {
                            countElement.innerHTML = `
                                <i class="fas fa-chart-line me-1"></i>${found.downloads} تحميل
                            `;
                            break;
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Error loading saved download counts:', error);
        }
    }
}