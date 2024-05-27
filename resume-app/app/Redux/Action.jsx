import { GET_EDUCATION_DATA, GET_INTEREST_DATA, GET_LANGUAGE_DATA, GET_PROFILE_DATA, GET_PROJECT_DATA, GET_SKILL_DATA, GET_SUMMERY_DATA } from "./ActionType"


export const GetProfile=(payload)=>{
 return {type:GET_PROFILE_DATA,payload:payload}
}

export const GetSummery=(payload)=>{
    return {type:GET_SUMMERY_DATA,payload:payload}
   }

   
export const GetEducation=(payload)=>{
    return {type:GET_EDUCATION_DATA,payload:payload}
   }


   export const GetSkills=(payload)=>{
    return {type:GET_SKILL_DATA,payload:payload}
   }

   export const GetLanguage=(payload)=>{
    return {type:GET_LANGUAGE_DATA,payload:payload}
   }

   export const GetInterest=(payload)=>{
    return {type:GET_INTEREST_DATA,payload:payload}
   }

   export const GetProjects=(payload)=>{
    return {type:GET_PROJECT_DATA,payload:payload}
   }