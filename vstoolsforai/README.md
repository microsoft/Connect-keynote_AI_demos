# Sample deep learning application using Visual Studio Tools for AI
In this sample you'll learn to use Visual Studio Tools for AI to train a deep learning model locally and scale-out to Azure, then include that model in an application. 

## Learn how to use Visual Studio Tools for AI
Visit our [Github site](https://github.com/Microsoft/vs-tools-for-ai) to learn more
 
## Prerequisites
- Install [Visual Studio](https://www.visualstudio.com/downloads/) Community edition or above
- [Prepare your local machine](https://github.com/Microsoft/vs-tools-for-ai/blob/master/docs/prepare-localmachine.md) with Python, TensorFlow and more by following the steps at the wiki to ensure you have Python, TensorFlow, CNTK, etc or use our [simple installer](https://github.com/Microsoft/samples-for-ai/tree/master/installer)
- Install [Visual Studio Tools for AI](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vstoolsai-vs2017)

## Steps
- Open MNIST.sln using Visual Studio
- Open Train_MNIST.py 
- Follow steps to [train on your local machine](https://github.com/Microsoft/vs-tools-for-ai/blob/master/docs/tensorflow-local.md) or [train in Azure](https://github.com/Microsoft/vs-tools-for-ai/blob/master/docs/tensorflow-vm.md) 
- Download model and replace digit.model in the Digitz app
- Select the digit.model and set the "Copy to output directory" property to "Copy if newer"
- Set Digitz.app as startup project and run it


