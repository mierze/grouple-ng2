import {
    Component
} from '@angular/core';

@Component({
    templateUrl: 'module/event/list/part/event-row.html'
})
export class EventRow {
    // $state, InviteResponder


    //functions
    profile(id) {
        //   $state.go('event-profile', {id: id});
    }
    decision(id, decision) {
            //   var post = {};
            //   post.id = id;
            //   post.user = storage.getItem('email');
            //   InviteResponder.respond(post, decision, 'event', function(data) {
            //     alert(data['message']);
            //     if (data['success'] === 1) {
            //       $state.go($state.current, {content: 'invites', id: storage.getItem('email')}, {reload: true});
            //     }
            //   });

        } //end decision
} //end event row
