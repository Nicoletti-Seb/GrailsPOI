
$(document).ready(function(){

    $('.picture-loader').on('click', '.add-picture-loader', function onLoadImage(event){
        var $el = $('.picture-loader .list-picture-loader input[type="file"]').last();
        var $newEl = $el.clone();
        $newEl.val('');
        $el.after($newEl);
    });

    $('.picture-loader').on('click', '.remove-picture-loader', function onLoadImage(event){
        var $inputs = $('.picture-loader .list-picture-loader input[type="file"]');

        if( $inputs.length > 1){
            $inputs.last().remove();
        }
    });



    $('.container_pictures').on('click', '.picture_form > .btn_delete_picture',
            function onDeletePicture(event){
                var $elPicture = $(event.currentTarget).parent();
                $elPicture.addClass('hide');

                var type =  $('.container_pictures').data('type');
                var idPicture = $elPicture.data('picture');

                $.ajax({
                    url: 'http://localhost:8080/ProjetPOIS/' + type +'/pictures/' + idPicture + '/delete',
                    method: 'DELETE',
                    mimeType: 'text/html',
                    success: function onSuccessDeletePicture(){
                        $elPicture.remove();
                    },
                    error: function onErrorDeletePicture(err){
                        console.error('FAILED : ' + err);
                        $elPicture.removeClass('hide');
                    }
                });
            });

    $('.confirm-password').on({
        change: validatePassword,
        keyup: validatePassword
    });


});

function validatePassword(event){
    var $password = $('.password');
    var confirmPassword = event.currentTarget;

    if($password.val() !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords non identique...");
    } else {
        confirmPassword.setCustomValidity('');
    }
}

