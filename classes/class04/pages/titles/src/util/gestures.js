const { GestureDescription, Finger, FingerCurl } = window.fp

const scrollDownGesture = new GestureDescription('scroll-down') // ✊️
const scrollUpGesture = new GestureDescription('scroll-up') // 🖐
const clickGesture = new GestureDescription('click') // 🤏

// Scroll Down
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
scrollDownGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
scrollDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5)

// all other fingers: curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  scrollDownGesture.addCurl(finger, FingerCurl.FullCurl, 1.0)
  scrollDownGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}

// Scroll Up
// -----------------------------------------------------------------------------

// no finger should be curled
for (let finger of Finger.all) {
  scrollUpGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
}

// Click
// -----------------------------------------------------------------------------
clickGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 0.8)
clickGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.5)

// dedão
clickGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
clickGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.4)

// dedo médio
clickGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 1.0)
clickGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.9)

// dedo anelar
clickGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0)
clickGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.9)

// dedo mindinho
clickGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0)
clickGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.9)

const knownGestures = [scrollDownGesture, scrollUpGesture, clickGesture]
const gestureStrings = {
  'scroll-down': '✊️',
  'scroll-up': '🖐',
  click: '🤏',
}

export { knownGestures, gestureStrings, clickGesture }
