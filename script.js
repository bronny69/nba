// NBA 球隊資料
const teams = [
    {
        name: '金州勇士',
        city: '舊金山',
        logo: 'https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg',
        description: '以Stephen Curry為首的王朝球隊，曾在2015-2018年間獲得3次總冠軍。'
    },
    {
        name: '洛杉磯湖人',
        city: '洛杉磯',
        logo: 'https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg',
        description: 'NBA最具歷史地位的豪門之一，共獲得17次總冠軍。'
    },
    {
        name: '布魯克林籃網',
        city: '布魯克林',
        logo: 'https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg',
        description: '布魯克林的職業籃球隊，擁有充滿活力的球風。'
    }
];

// 熱門球員資料
const players = [
    {
        name: 'Stephen Curry',
        team: '金州勇士',
        image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png',
        stats: '生涯場均得分：24.7分'
    },
    {
        name: 'LeBron James',
        team: '洛杉磯湖人',
        image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
        stats: '生涯場均得分：27.1分'
    },
    {
        name: 'Kevin Durant',
        team: '布魯克林籃網',
        image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png',
        stats: '生涯場均得分：27.2分'
    }
];

// 歷史故事資料
const history = [
    {
        year: '1946',
        title: 'NBA 成立',
        content: 'NBA前身為BAA（美國籃球協會），於1946年6月6日在紐約成立。'
    },
    {
        year: '1984',
        title: 'Michael Jordan 加入NBA',
        content: 'Michael Jordan被芝加哥公牛在1984年選秀會第3順位選中，開啟了一個傳奇時代。'
    }
];

// 載入球隊資訊
function loadTeams() {
    const container = document.getElementById('teamsContainer');
    teams.forEach(team => {
        const teamHtml = `
            <div class="col-md-4">
                <div class="card team-card">
                    <img src="${team.logo}" class="card-img-top team-logo p-3" alt="${team.name}">
                    <div class="card-body">
                        <h5 class="card-title">${team.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${team.city}</h6>
                        <p class="card-text">${team.description}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += teamHtml;
    });
}

// 載入球員資訊
function loadPlayers() {
    const container = document.getElementById('playersContainer');
    players.forEach(player => {
        const playerHtml = `
            <div class="col-md-4">
                <div class="card player-card">
                    <img src="${player.image}" class="card-img-top player-image p-3" alt="${player.name}">
                    <div class="card-body">
                        <h5 class="card-title">${player.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${player.team}</h6>
                        <p class="card-text">${player.stats}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += playerHtml;
    });
}

// 載入歷史故事
function loadHistory() {
    const container = document.getElementById('historyContent');
    history.forEach(item => {
        const historyHtml = `
            <div class="history-item">
                <h4>${item.year} - ${item.title}</h4>
                <p>${item.content}</p>
            </div>
        `;
        container.innerHTML += historyHtml;
    });
}

// 頁面載入時執行
document.addEventListener('DOMContentLoaded', () => {
    loadTeams();
    loadPlayers();
    loadHistory();
});