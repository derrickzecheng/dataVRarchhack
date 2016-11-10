using UnityEngine;
using System.Collections;

public class menuincsharp : MonoBehaviour {

	
	// Use this for initialization
	void OnMouseDown()
	{
		//if we click the button
		if (this.name == "school data set") {
			//load the school data set
			//SceneManager.LoadScene("DataVR1", LoadSceneMode.Additive);
			//Application.LoadLevel ("DataVR1");
		}
		if (this.name == "Lung Cancer Data") {
			//SceneManager.LoadScene("LungCancer", LoadSceneMode.Additive);
			//Application.LoadLevel ("LungCancer");
		}
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
