import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";import"./BackToTopButton.astro_astro_type_script_index_0_lang.CePRbCnl.js";document.getElementById("contact-form").addEventListener("submit",function(r){r.preventDefault();const o=r.target,n=new FormData(o),e=document.getElementById("form-response");fetch(o.action,{method:o.method,body:n,headers:{Accept:"application/json"}}).then(t=>{if(t.ok)e.textContent="Thank you for your message!",e.className="form-response success",o.reset();else return t.json().then(s=>{Object.hasOwn(s,"errors")?(e.textContent=s.errors.map(m=>m.message).join(", "),e.className="form-response error"):(e.textContent="Oops! There was a problem submitting your form",e.className="form-response error")})}).catch(t=>{e.textContent=`Oops! There was a problem submitting your form: ${t.message}`,e.className="form-response error"})});
