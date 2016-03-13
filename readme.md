## personal-health-record

[![Circle CI](https://circleci.com/gh/clinical-meteor/personal-health-record/tree/master.svg?style=svg)](https://circleci.com/gh/clinical-meteor/personal-health-record/tree/master)

This project is intended to help a person assemble a Personal Health Record.  A PHR is similar to a weblog, but healthcare oriented.  We're starting this project by enabling people to import what is likely to be their largest source of weblog data... their Facebook profile.  In future versions, we will include fitness tracking, medication tracking, and other features to help an individual assemble their entire medical history in a single place.  


![PHR-MultiDevices](https://raw.githubusercontent.com/awatson1978/personal-health-record/master/public/PHR-MultiDevices.png)

======================================
#### Installation

```js
git clone https://github.com/awatson1978/personal-health-record
cd personal-health-record
meteor
```

======================================
#### Security  

**IMPORTANT:  THIS SOFTWARE DOES NOT SHIP WITH ANY SECURITY IMPLEMENTED**  

This software is **not** HIPAA compliant by default.  In fact, it has no security implemented at all by default.  The assuption is that people are going to want different security models...  some people will want a private record; others a friending model; others a collaboration model.  So don't just toss it online with your personal health information.  

That being said, we **are** currently putting the security components under QA, investigating the best security model to use in production, and are in discussions with groups to build out a HIPAA compliant hosting solution.  So those features are on their way.  

======================================
#### Exporting a Facebook Profile

The ClinicalMeteor PHR applet currently supports importing a profile via the ``Settings > General > Download a Copy`` functionality.  We will accept any pull-request that adds support for GraphQL integration, or other direct querying of the Facebook APIs.  

- [http://givememydata.com/#how_to_use](http://givememydata.com/#how_to_use)
- [https://github.com/KyleAMathews/facebook-export](https://github.com/KyleAMathews/facebook-export)
- [https://apps.facebook.com/netvizz](https://apps.facebook.com/netvizz/?code=AQDiegD7y5HazDT27RLZzOUMJyp4ZA3NLK5dTF43VPcDhbU1F80zzEgOxioZC3gA3_cdLEV7MOYhHV6l_v1VJnhQ_9CIPRYtrjmJfyA4fmrr9TEnwUfPwxGDPZDGSaoNthwCUrgDPGbW2On8bjuV7MlWBZ0ydeUAtp5olXPNtMNXH1Tfx9TvJCF_-pRRYhG2I8MMwNi3fsjUPledb7NnkoSje5UR_L4yWGYl5pNVmofyIo6RXA1E_uQyw5RFa1ALFWpuczN_DbUAeOkqdjeYgzHh9xGfiwrS8DY6yYI4DxkqStq6EYbD4EiUXUCLuepNnTpX8PlTZ6fG0WkdgQVTQnZQ&state=f3949717e6f7f3893bfe7fa0dd965ae0#_=_)


======================================
#### Contributions  

There have been many, many requests over the years for PHR style functionality; so we expect there will be some Quantified Self enthusiests who will want to hack on this, and contribute functionality back.  The things we're looking to prioritize in the short term into this particular repository include:

- Cordova Support (Hammer, etc)
- Electron Support 
- Offline Database Support
- GraphQL Integration
- Basic Medication Tracking Package
- Basic Fitness Tracking Package
- Basic ICD10 Diagnosis Package

Once those pieces are in place, we'll probably fork the project into a Social Health Record and Quantified Self app.


======================================
#### Licensing

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
