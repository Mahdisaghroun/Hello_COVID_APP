const questions={
    q1:{
        question:"What was your warmest temperature in the past 48 hours?",
        res:2,
        calcul:(temp)=>{
            if(temp>37 && temp<=39)
            return 5
            else if(temp>39)return 10
            else return 0
        }
    },
    q2:{
        question:"Have you had a cough or an increase in your usual cough in the past few days?",
        res:1,
        resYes:8,
        resNo:0
    },
    q3:{
        question:"In the past few days, have you noticed a sharp decrease or loss in your taste or smell?",
        res:1,
        resYes:8,
        resNo:0
    },
    q4:{
        question:"In the past few days, have you had a sore throat and / or unusual muscle aches and / or body aches?",
        res:1,
        resYes:8,
        resNo:0
    },
    q5:{
        question:"In the past 24 hours, have you had diarrhea? With at least 3 loose stools.",
        res:1,
        resYes:8,
        resNo:0
    },
    q6:{
        question:"Have you had unusual fatigue in the past few days?",
        res:1,
        resYes:8,
        resNo:0
    },
    q7:{
        question:"For 24 hours or more, have you been unable to eat or drink?",
        res:1,
        resYes:8,
        resNo:0
    },
     q8:{
        question:"In the past 24 hours, have you noticed any unusual shortness of breath when speaking or making a little effort?",
        res:1,
        resYes:8,
        resNo:0
    },
    q9:{
        question:"What is your age ?\nThis, in order to calculate a specific risk factor.",
        res:2,
        calcul:(temp)=>{
            if(temp>0 && temp<10)
            return 5
            else if(temp>10 && temp<20) return 8
            else if(temp>=20 && temp<40) return 10
            else if(temp>=40 && temp<65) return 15
            else if(temp>=65 ) return 20
        }
    }  ,
    q10:{
        question:"Do you have a disease known to lower your immune system?",
        res:1,
        resYes:20,
        resNo:0
    }  ,
    q11:{
        question:"Are you taking immunosuppressive therapy?",
        res:1,
        resYes:20,
        resNo:0
    }
   
}
export default questions;