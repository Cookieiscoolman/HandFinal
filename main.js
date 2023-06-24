Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>"'
    });
}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pcTYeegGe/',modelLoaded);

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResults(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results);
        document.getElementById("result_hand_name").innerHTML = results[0].label;
        document.getElementById("result_hand_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "Good")
        {
            document.getElementById("update_hand").innerHTML = "&#128077"
        }
        if(results[0].label == "Bad")
        {
            document.getElementById("update_hand").innerHTML = "&#128078;"
        }
        if(results[0].label == "Peace")
        {
            document.getElementById("update_hand").innerHTML = "&#9996;"
        }
        if(results[1].label == "Good")
        {
            document.getElementById("update_hand").innerHTML = "&#128077"
        }
        if(results[1].label == "Bad")
        {
            document.getElementById("update_hand").innerHTML = "&#128078;"
        }
        if(results[1].label == "Peace")
        {
            document.getElementById("update_hand").innerHTML = "&#9996;"
        }
        if(results[2].label == "Good")
        {
            document.getElementById("update_hand").innerHTML = "&#128077"
        }
        if(results[2].label == "Bad")
        {
            document.getElementById("update_hand").innerHTML = "&#128078;"
        }
        if(results[2].label == "Peace")
        {
            document.getElementById("update_hand").innerHTML = "&#9996;"
        }
    }
}