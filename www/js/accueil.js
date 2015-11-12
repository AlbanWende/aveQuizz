// JavaScript Document

function hideFilDiscussion(id)
{
	$('#'+id).hide('slow');	
}

function showFilDiscussion(id)
{
	$('#'+id).show('slow');	
}

function toogleFilDiscussion(id)
{
		if(document.getElementById(id).style.display == 'none')
			showFilDiscussion(id);
		else
			hideFilDiscussion(id);
}

$('#cultGen').click(function(e){
            toogleFilDiscussion('filDiscuss_cultGen');
    });
$('#filDiscuss_cultGen').click(function(e){
            //toogleFilDiscussion('filDiscuss_cultGen');
    });