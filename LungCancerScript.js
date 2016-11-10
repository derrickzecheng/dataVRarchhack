#pragma strict


var objectToSpawn : GameObject;


function Start () {

var color1 : Color = Color.white;
color1.r = 0xED;
color1.g = 0xEB;
color1.b = 0xE6;

var color2 : Color = Color.white;
color2.r = 226;
color2.g = 228;
color2.b = 144;

var color3 : Color = Color.white;
color3.r = 0x94;
color3.g = 0xC7;
color3.b = 0xB6;

var color4 : Color = Color.white;
color4.r = 0x40;
color4.g = 0x3B;
color4.b = 0x33;

var color5 : Color = Color.white;
color5.r = 0xD3;
color5.g = 0x64;
color5.b = 0x3B;



var sphereObject1 = GameObject.CreatePrimitive(PrimitiveType.Sphere);
var mySphereCollider1 : SphereCollider = sphereObject1.AddComponent(SphereCollider);

var sphereObject2 = GameObject.CreatePrimitive(PrimitiveType.Sphere);
var mySphereCollider2 : SphereCollider = sphereObject2.AddComponent(SphereCollider);

var sphereObject3 = GameObject.CreatePrimitive(PrimitiveType.Sphere);
var mySphereCollider3 : SphereCollider = sphereObject3.AddComponent(SphereCollider);

var sphereObject4 = GameObject.CreatePrimitive(PrimitiveType.Sphere);
var mySphereCollider4 : SphereCollider = sphereObject4.AddComponent(SphereCollider);

var sphereObject5 = GameObject.CreatePrimitive(PrimitiveType.Sphere);
var mySphereCollider5 : SphereCollider = sphereObject5.AddComponent(SphereCollider);



//sphere.radius = 0.95;
 //var mySphereCollider : SphereCollider = objectToSpawn.GetComponent(SphereCollider);



var fileData : String  = System.IO.File.ReadAllText("C:/Users/MLH-Admin/Desktop/lungcancer.txt");
     var lines : String[] = fileData.Split("\n"[0]);
for(var i : int =0; i<lines.Length;i++){
  var lineData : String[] = (lines[i].Trim()).Split(","[0]);

    var xPos = (parseInt(lineData[0]))*5;
     var yPos = (parseInt(lineData[1]))*5;
      var zPos = (parseFloat(lineData[2]))*5;
      var radius = (parseFloat(lineData[3])/3);
      var color = lineData[4];
       mySphereCollider1.radius = 0;
       mySphereCollider2.radius = 0;
       mySphereCollider3.radius = 0;
       mySphereCollider4.radius = 0;
       mySphereCollider5.radius = 0;
       print(color);
       //color = color.Trim();

     //var rend1 = mySphereCollider1.GetComponent.<Renderer>();
     // var rend2 = mySphereCollider1.GetComponent.<Renderer>();
   //  rend.material.SetColor("_Color", Color.red);

   		print(color=="1");
   		print(color=="2");
   		print(color=="3");


       if(color == "1"){
      	 mySphereCollider1.GetComponent.<Renderer>().material.color = Color.white;
      	 var sColider1 = Instantiate(mySphereCollider1, transform.position + Vector3(xPos,yPos,zPos), transform.rotation);
      	  sColider1.transform.localScale = Vector3(radius, radius, radius); // change its local scale in x y z format
       }else if(color == "2"){
       mySphereCollider2.GetComponent.<Renderer>().material.color = Color.yellow;
       var sColider2 = Instantiate(mySphereCollider2, transform.position + Vector3(xPos,yPos,zPos), transform.rotation);
        sColider2.transform.localScale = Vector3(radius, radius, radius); // change its local scale in x y z format
       }

       else if(color == "3"){
       mySphereCollider3.GetComponent.<Renderer>().material.color = Color.green;
       var sColider3 = Instantiate(mySphereCollider3, transform.position + Vector3(xPos,yPos,zPos), transform.rotation);
        sColider3.transform.localScale = Vector3(radius, radius, radius); // change its local scale in x y z format
       }

       else if(color == "4"){
       mySphereCollider4.GetComponent.<Renderer>().material.color = Color.black;
       var sColider4 = Instantiate(mySphereCollider2, transform.position + Vector3(xPos,yPos,zPos), transform.rotation);
        sColider4.transform.localScale = Vector3(radius, radius, radius); // change its local scale in x y z format
       }

       else {
       mySphereCollider5.GetComponent.<Renderer>().material.color = Color.red;
       var sColider5 = Instantiate(mySphereCollider5, transform.position + Vector3(xPos,yPos,zPos), transform.rotation);
        sColider5.transform.localScale = Vector3(radius, radius, radius); // change its local scale in x y z format
       }

    }



}

function Update () {

}