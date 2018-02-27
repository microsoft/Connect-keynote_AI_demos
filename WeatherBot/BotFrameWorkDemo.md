Last updated: 2/27/2018

Value Props
===========

The **key message viewers** should take away from this demo:

-   **Easily create a bot and leverage AI **

Demo Machines (requirements) and Tools
======================================

-   Surface

-   Install VS Code

-   Install Botframework Emulator

-   Install Node.js

Demo Flow
=========

-   Open <http://dev.botframework.com>

-   Create a Bot or Skill

    ![](./Imagebot/media/image1.png)

-   Hit Create

-   Create a new SDK bot hosted in Microsoft Azure

    ![](./Imagebot/media/image2.png)

-   Enter app name

-   Choose Subscription

-   Create new Resource Group

-   Choose Hosting plan

-   Click Create

    ![](./Imagebot/media/image3.png)

-   Choose NodeJS & Language Understanding Option

    ![](./Imagebot/media/image4.png)

-   We now have a choice between C\# and NodeJS and several different
    bot templates. Today look at a Node bot that makes use of
    Microsoft's Language Understanding Intelligent Service.

-   Click Next

-   Download Zip File

-   Extract Zip File

-   Open Folder in Visual Studio Code and open app.js

-   Here's the code

    ![](./Imagebot/media/image5.png)
    ![](./Imagebot/media/image6.png)

-   Let's look at this app.js file in Visual Studio Code. Here we have a
    very basic bot that will let you plug in your LUIS api keys.
    Straight out of the box, we have all of the plumbing for the bot to
    work in the emulator and be deployed. Though, It will only respond
    with "sorry, I don't understand that", though. So it's not the most
    intelligent bot on the market, yet.

-   So, let's head over to LUIS and see what we can add in to make the
    bot a little smarter. When we initiate the bot in Azure and selected
    a language understanding model, it automatically spun up an app in
    the Microsoft Cognitive Service LUIS site.

-   Open Luis.AI and open the Luis app we created

-   Go to the list of prebuilt domains- The LUIS site has a list of
    prebuilt intents/entities that we can add in automatically! How cool
    is that? Let's try one of those.

-   Add weather intents- The weather domain has two intents: Get
    Forecast and Get Condition -- you can think of get forecast as
    telling you the predictions for the weather whereas get condition
    will tell you the trends in weather like how much does it rain in
    Seattle?

-   Let's Train and publish the bot

    ![](./Imagebot/media/image7.png)

    ![](./Imagebot/media/image8.png)

-   If we go back to the bot and change the code slightly to look for
    these new intents that we added in we can try it out.

-   If I try basic things like "what's the weather this weekend?" we get
    back that the intent is weather forecast. Awesome! That's what we
    expected. If I say "current weather" we get Weather Condition.

    ![](./Imagebot/media/image9.png)

-   But now if I try something like "What's your name?" it thinks that
    the intent is Get forecast. Now that doesn't seem right...

    ![](./Imagebot/media/image10.png)

-   With a few simple utterances in LUIS we can make the bot just a
    little smarter.

-   Let's head back to LUIS and a few more in.

-   In GetCondition we want to put phrases that tell us the current
    condition or general condition trends of an area. So we will put an
    utterance like does it rain a lot in seattle and Is it currently
    raining? And in Get Forecast let's put utterances that will tell us
    future information about the weather-- tell me the weather for
    tomorrow and what will it be like tomorrow.

-   In None we can add "what time is it"

-   Let's go back and refresh our app to see what happens.

    ![](./Imagebot/media/image11.png)

-   So we can see how easy and fast it is to add AI to our bots, but
    let's see a real-life scenario of how Cognitive Service is helping
    the medical industry.

-   We recently teamed up with the Institute of Precision Medicine at
    Weill Cornell Medical to help create a Bot Precision Medicine
    Knowledgebase.

-   The extensive knowledgebase is organized to provide information
    about clinical cancer variants and interpretations in a structured
    way,

-   However, there are over 600 genes, 2000 variants with 1500 clinical
    interpretations in the database -- so going through all of the data
    can be tedious for the pathologists, doctors, and researchers, and
    as you can imagine, many of these scenarios are very time
    constrained.

-   But with the help of LUIS -- we were able to train a model that
    clinicians can now use to access data at a faster rate and as a
    result, save more lives.

-   If we take a look at the LUIS Model, the team was able to train the
    model with over 500 sample utterances pulled from different
    combinations of the genes and variants. While a regex might seem
    like the obvious solution here, there is often no pattern to what
    the genes and tumours will be called so training a natural language
    model was necessary.

-   Let's walk through some examples in Skype.

The app is now published on different channels including Skype, Teams,
Slack, Cortana with the goal of embedding it into Windows 10 IoT
Solutions as well as Mixed Reality. The possibilities are endless, and
the institute is making amazing strides to saving lives through
artificial intelligence!

![](./Imagebot/media/image12.png)
![](./Imagebot/media/image13.png)

