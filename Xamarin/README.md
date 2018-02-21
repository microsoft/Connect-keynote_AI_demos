Last updated: 2/20/2018

Value Props
===========

The **three things viewers** should take away from this demo:

1.  **Leveraging Customization with CustomVision.ai**

	-   Custom Vision Service lets you build a custom image classifier with ease

2.  **Easy to add Custom Vision Model to your Xamarin iOS App**

    -   Cognitive Services are easy to use and include in your Xamarin iOS App
        
3.  **Models deployed are fast**

	-    Deploying models to a device removes the need for an internet connection


Demo Machines (requirements) and Tools
======================================

-   macOS X High Sierra with Xcode setup for iPhone development

-   iPhone with iOS 11 setup for development

-	Latest Visual Studio for Mac with Support for CoreML 


Demo Pre-Setup and Cleanup
==========================

-	Download the code from this repository CoreMLAzureModel

-	Follow the steps in the visionapi folder to create your own Fruit.mlmodel or use the one included in the CoreMLAzureModel/CustomVision folder

-	To read more about the Custom Vision Service model export for CoreML:

    -   https://azure.microsoft.com/en-us/blog/custom-vision-service-introduces-classifier-export-starting-with-coreml-for-ios-11/


Using the model that was created using the Azure Custom Vision Service we can create an application that applies that model to images in realtime on an iPhone. The application that you have downloaded already contains a copy of the fruit model so you can get started right away. In the next few steps we will show you how to convert a model you have downloaded from the Azure Custom Vision Service for use in your application in case you want to classify more fruits or something else.


**Explanation-** We need to take the fruits.zip file we downloaded and prepare it for use with the our Xamarin iOS Application, this means converting it into a format that can be used by the application.

1. Open a terminal window

2. cd \<path to CoreMLAzureModel folder\>/CustomVision

3. Use Xcode utility to "compile" the model

		$ xcrun coremlcompiler compile Fruit.mlmodel Resources
		
4. There is some interesting output from this that you should examine. The second line tells us the input is 3 channels of data (R, G, B) and the image is expected to be 227x227 pixels. The last line tells us that the output will have 7 classes with their probabilities. The intervening rows shows us information on the structure of the model:

		Input name(s) and shape(s): 
		data : (C,H,W) = (3, 227, 227)
		...
		Neural Network compiler 64: 130 , name = loss, output shape : (C,H,W) = (7, 1, 1) 
		
5. If everything went right there should now be a Fruit.mlmodelc folder in the resources folder.

**Explanation-** Now that we have setup our model we need to make sure the code matches the model. 

1. Launch Visual Studio for the Mac by double-clicking on the CustomVision.sln file in the CoreMLAzureModel/CustomVision folder

2. From the right hand side locate the ViewController.cs file and open it

3. Line 49 sets the size that we want the image to be before we send it to the model:

		CGSize targetImageSize = new CGSize(227, 227); // must match model data input
		
4. Line 59 indicates what model to load by indicating the name of the file and the extension:

		var modelPath = NSBundle.MainBundle.GetUrlForResource("Fruit", "mlmodelc");
		

**Explanation-** With the steps above you are ready to run your code on an attached iPhone that has been configured for development.

1. Build the application from the Build -> Build All menu item

2. Attach the iPhone to the computer with the appropriate iPhone USB cable

3. Select the device from the device selector next to Debug at the top of the window

4. Run the application

5. Now point your iPhone camera at some real fruit or fruits you have found using Bing Image search on your computer


