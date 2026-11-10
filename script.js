document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-track="cta_click"]').forEach(el=>el.addEventListener('click',()=>window.trackKaitenEvent&&window.trackKaitenEvent('cta_click',{placement:el.textContent.trim()})));
  const form=document.getElementById('demo-form');
  if(form){
    form.addEventListener('focusin',()=>{if(!form.dataset.started){form.dataset.started='1';window.trackKaitenEvent&&window.trackKaitenEvent('demo_form_start',{form_id:'demo-form'});}});
    form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;window.trackKaitenEvent&&window.trackKaitenEvent('generate_lead',{form_id:'demo-form',team_size:form.elements.team_size.value,role:form.elements.role.value});document.getElementById('form-result').hidden=false;form.reset();form.dataset.started='';});
  }
});