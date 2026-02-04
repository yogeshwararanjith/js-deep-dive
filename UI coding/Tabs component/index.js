const state = {
    "activeId":"tab-1"
}

let tabs = document.querySelectorAll('[data-tab]')
let panels = document.querySelectorAll('[data-panel]')

render()

function render(){
    tabs.forEach(tab => {
        tab.classList.toggle('active',tab.dataset.tab === state.activeId);
    });

    panels.forEach(panel => {
        let panelId = state.activeId.replace('tab-','panel-')
        panel.classList.toggle('active',panel.dataset.panel === panelId)
    })
}

document.querySelector('.tab').addEventListener('click',function(event){
    let tab = event.target.closest('[data-tab]');
    if(!tab) return;
    state.activeId = tab.dataset.tab;
    render();
})