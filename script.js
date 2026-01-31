// 导航栏移动端菜单
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // 关闭移动端菜单
            navMenu.classList.remove('active');
        }
    });
});

// 获奖作品数据
const awardsData = [
    {
        year: 2025,
        title: '威胁慧眼-知识驱动的智能威胁情报构建和分析平台',
        level: '一等奖',
        description: '队长：张天一，队员：林思远、毛其乐、孙晨皓。',
        advisor: '葛蒙蒙老师',
        advisorLink: 'https://homepage.hit.edu.cn/gemengmeng',
        team: '张天一团队',
        tags: ['威胁情报', '知识驱动', '智能分析']
    },
    {
        year: 2025,
        title: 'AIGCTraceShield大模型生成内容溯源平台',
        level: '二等奖',
        description: '队长：刘新雨，队员：李满园。',
        advisor: '史建焘老师',
        advisorLink: 'https://homepage.hit.edu.cn/shijiandao',
        team: '刘新雨团队',
        tags: ['AIGC', '内容溯源', '大模型']
    },
    {
        year: 2025,
        title: '基于大模型幻觉增强技术的代码漏洞挖掘系统',
        level: '二等奖',
        description: '队长：张蕊。',
        advisor: '翟建宏老师',
        advisorLink: 'https://homepage.hit.edu.cn/zhaijh',
        team: '张蕊团队',
        tags: ['大模型', '幻觉增强', '漏洞挖掘']
    },
    {
        year: 2025,
        title: 'MiniSentry--基于任务驱动的规避型恶意小程序检测系统',
        level: '三等奖',
        description: '队长：王佳宁。',
        advisor: '刘立坤老师',
        advisorLink: 'https://homepage.hit.edu.cn/liulikun',
        team: '王佳宁团队',
        tags: ['恶意代码检测', '小程序', '任务驱动']
    }
];

// 渲染获奖作品
function renderAwards(yearFilter = 'all') {
    const awardsGrid = document.getElementById('awardsGrid');
    const filteredAwards = yearFilter === 'all' 
        ? awardsData 
        : awardsData.filter(award => award.year === parseInt(yearFilter));
    
    awardsGrid.innerHTML = filteredAwards.map(award => `
        <div class="award-card" data-year="${award.year}">
            <div class="award-header">
                <div class="award-year">${award.year}</div>
                <div class="award-title">${award.title}</div>
                <span class="award-level">${award.level}</span>
            </div>
            <div class="award-body">
                <p class="award-description">${award.description}</p>
                <div class="award-tags">
                    ${award.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="award-team">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style="vertical-align: middle; margin-right: 4px;">
                        <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-5.396-3.64A3.498 3.498 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954 4.01 4.01 0 0 0-2.12-2.608A3 3 0 0 1 11 4ZM8 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/>
                    </svg>
                    ${award.team}
                    ${award.advisor ? `
                        <span style="margin-left: 10px; color: #666; font-size: 0.9em; display: inline-flex; align-items: center;">
                            (指导老师: ${award.advisor}
                            ${award.advisorLink ? `
                                <a href="${award.advisorLink}" target="_blank" style="display: inline-flex; align-items: center; margin-left: 4px; color: #0366d6; text-decoration: none;" title="访问主页">
                                    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                                    </svg>
                                </a>
                            ` : ''})
                        </span>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// 筛选按钮事件
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // 移除所有active类
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // 添加active类到当前按钮
        btn.classList.add('active');
        // 获取筛选年份
        const year = btn.getAttribute('data-year');
        // 渲染筛选后的作品
        renderAwards(year);
    });
});

// 初始化渲染
renderAwards('all');
