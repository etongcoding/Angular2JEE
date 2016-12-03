var tomw = function(event) {
    var chat_en_input = $('#chat_en_input');
    var chat_mw_input = $('#chat_mw_input');
    var chat_up_right_container = $('#chat_up_right_container');
     
    if ( event.which == 13 || event.keyCode == 13 ) {

        mwStrings = chat_en_input.val();
        mwStrings = ld2mw(mwStrings);
        //mwStrings = ChToMw(mwStrings);
		//mwStrings = ChEnd(mwStrings);
		//mwStrings = Merge(mwStrings);
        mwStrings = encodemw( mwStrings );

        // to mw box
        $('#chat_mw_input').text( '' );

        // to mw big box   style="text-align: right;     <mark class=chat_mw_box>
        // chat_up_right_container.html( '<div><mark class=chat_mw_box>' + mwStrings + '</mark></div><br />' + chat_up_right_container.html() );
        var myHtml = '<div>' ;
        myHtml += '<div style="height:15%;clear:both;float:left;">';
        myHtml += '<div><img src="../images/img1.png" style="width:40px;border-radius:5px;" /></div>';
        myHtml += '<div>OF 0De</div>';
        myHtml += '</div>';
        myHtml += '<div class=chat_mw_box style="max-height:80%;height:auto;float:left;border-radius:15px;padding:10px;">' + mwStrings + '</div>';
        //myHtml += '<div style="height:5%;background-color:red;float:right;">&nbsp;&nbsp;&nbsp;&nbsp;</div><br />';
        myHtml += '</div><div style="clear:both;"><br />'
        myHtml += '</div>'
        myHtml += chat_up_right_container.html();
        chat_up_right_container.html( myHtml );

        // to en box
        $('#chat_en_input').val( '' );
        
        return true;
    } else {
        
        mwStrings = chat_en_input.val() + event.key;
        mwStrings = ld2mw(mwStrings);
        //mwStrings = ChToMw(mwStrings);
		//mwStrings = ChEnd(mwStrings);
		//mwStrings = Merge(mwStrings);

        // to left box
        chat_mw_input.text( mwStrings );
    }

    return true;
}

var backspace = function(event) {
    if (event.which == 8 || event.keyCode == 8) {
        var chat_en_input = $('#chat_en_input');
        var chat_mw_input = $('#chat_mw_input');
        mwStrings = chat_en_input.val();
        mwStrings = ld2mw(mwStrings);
        // mwStrings = ChToMw(mwStrings);
		// mwStrings = ChEnd(mwStrings);
		// mwStrings = Merge(mwStrings);
        

        // to left box
        chat_mw_input.text( mwStrings );
     }  
     return true;
}

