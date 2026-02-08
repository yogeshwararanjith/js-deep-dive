let state = {
    'accordion-1' : {"expanded":false,"collapsed":true},
    'accordion-2' : {"expanded":false,"collapsed":true},
    'accordion-3' : {"expanded":false,"collapsed":true}
}

let activeAccordion;

// let newState = {
//     "activeAccordion" : 'accordion-1',
//     "accordionExpanded" : false,
//     "accordionCollapsed" : true
// }

// render()

function render(){
    let activeAcc = document.querySelector(`[data-accordion = "${activeAccordion}"]`);
        state[activeAccordion]["expanded"] = true;
        state[activeAccordion]["collapsed"] = false;

        activeAcc.classList.toggle('accordion-icon--rotated');

    // let views = document.querySelectorAll('[data-view]')
    // console.log(views)
    // views.forEach(view => {
    //     let viewId = activeAccordion.replace('accordion-','view-');
    //     view.classList.toggle('active',view.dataset.view === viewId)
    // })

    let viewId = activeAccordion.replace('accordion-','view-');
    let view = document.querySelector(`[data-view="${viewId}"]`)
    view.classList.toggle('active')
}


const container = document.querySelector('body > div');
container.addEventListener('click',function(e){
    const header = e.target.closest('div')
    const accordion = header?.querySelector('[data-accordion]')
    console.log(accordion)
    if(!accordion) return;
    activeAccordion = accordion.dataset.accordion;
    render();
})

