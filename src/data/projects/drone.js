export const droneProject = {
  id: 1,
  title: "Vitamin D3 Absorption Detector",
  description: "This device is a wearable, noninvasive tool that measures UV exposure and calculates personalized vitamin D absorption based on factors like age, skin type, and body exposure.",
  longDescription: [
    "I developed a wearable device using an Arduino platform, which I programmed in the Arduino IDE to personalize conditions based on the user's age, skin type, and the amount of body exposed to sunlight. To house the Arduino components, I designed a custom bracelet using Autodesk Inventor, ensuring a comfortable and functional fit. I then brought the design to life through 3D printing. Additionally, I soldered the necessary electronic components to ensure seamless integration and durability of the wearable device.",
    "Vitamin D deficiency is a widespread health concern linked to numerous physical and mental conditions, including heart disease, depression, weakened immune function, and bone disorders. Low levels of vitamin D can also contribute to fatigue and mood swings, further impacting overall well-being. Vitamin D levels fluctuate throughout the year, particularly in regions with significant seasonal variations in sunlight exposure. Many existing methods for tracking vitamin D levels are invasive, which can be uncomfortable and impractical for some individuals. In contrast, I've developed a noninvasive device that allows users to measure their UV exposure and calculate vitamin D absorption comfortably and easily.",
    "Unlike traditional methods, this device is personalized to the user, taking into account factors such as age, skin type, and the amount of skin exposed. By providing real-time, noninvasive feedback, it allows individuals to track changes in their vitamin D levels more frequently and accurately. This enables users to optimize their sun exposure, reduce the risk of deficiency, and avoid the dangers of excessive UV exposure, ultimately promoting better overall health.",
    "When the user goes outside, the UV sensor will measure the UV rays the user is exposed to and will store the data in a server to be accessed and analyzed at a later time. The arduino will then convert the UV index into a vitamin D level based on their skin type, age, and amount of body exposed as shown below:",
    "Vitamin D3 (IU)/day = VDD × (4,861 IU/SED for skin type II) × STF × FBE × AF, where VDD is the 'Vitamin D Dose', STF is 'skin type factor', FBE is 'fraction body exposure', and AF is 'age factor'. (Godar, 2011)",
    "Upon reaching the daily vitamin D value, the arduino will generate a beep to let the user know that they received a sufficient amount of exposure to the sun for the day."
  ],
  image: "https://drive.google.com/uc?export=view&id=1jPCeNadvmkgPE6Ewc5bQ0AbS7XrqohTE",
  gallery: [
    "https://drive.google.com/file/d/1jPCeNadvmkgPE6Ewc5bQ0AbS7XrqohTE/view?usp=sharing",
    "https://drive.google.com/uc?export=view&id=GALLERY_IMAGE_2_ID",
    "https://drive.google.com/uc?export=view&id=GALLERY_IMAGE_3_ID"
  ],
  video: "https://drive.google.com/file/d/1jPCeNadvmkgPE6Ewc5bQ0AbS7XrqohTE/preview",
  tags: [],
  features: [
    "Non-invasive measurement",
    "Real-time monitoring",
    "Personalized health insights"
  ],
  technicalDetails: [
    "Adafruit Vitamin-D3 Sensor ",
    "Arduino IDE",
    "Adafruit FLORA Board",
    "3D Printed With CAD",
    "Soldering"
  ]
} 