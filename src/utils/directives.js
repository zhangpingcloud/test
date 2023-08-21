export function registerPermissionDirective(app){
    app.directive('permission', {
        mounted(el, binding){
            console.log(el, binding);
            if(binding.value !== 'SUPERADMIN'){
                el.disabled = true;
            }else{
                el.disabled = false;
            }
        }
    })
}