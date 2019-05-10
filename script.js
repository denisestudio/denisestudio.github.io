// pour voir combien de personnes on cliqué sur le button CV pour le visualiser, le lier a google analytics 
document.querySelector('button').addEventListener('click',(event) =>{
    console.log('CV Button was pressed');
})
// Alerts the tracking ID for the default tracker.
ga(function(tracker) {
    alert(tracker.get('trackingId'));
});