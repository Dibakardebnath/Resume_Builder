import { GET_EDUCATION_DATA, GET_INTEREST_DATA, GET_LANGUAGE_DATA, GET_PROFILE_DATA, GET_PROJECT_DATA, GET_SKILL_DATA, GET_SUMMERY_DATA } from "./ActionType"







const initialState={
    isAuth:false,
    Profile:[],
    Pro:false,
    Summery:[],
    Sum:false,
    Education:[],
    Edu:false,
    Skills:[],
    Skil:false,
    Language:[],
    Lang:false,
    Interests:[],
    Inter:false,
    Project:[],
    Proj:false,
}

export const Reducer=(state=initialState,{type,payload}) =>{
    switch(type){
        case GET_PROFILE_DATA:{
            return {...state,Profile:payload,Pro:true,isAuth:true};
        }

        case GET_SUMMERY_DATA:{
            return {...state,Summery:payload,Sum:true}
        }

        case GET_EDUCATION_DATA:{
            return {...state,Education:payload,Edu:true}
        }

        case GET_SKILL_DATA:{
            return {...state,Skills:payload,Skil:true}
        }

        case GET_LANGUAGE_DATA:{
            return {...state,Language:payload,Lang:true}
        }
        
        case GET_INTEREST_DATA:{
            return {...state,Interests:payload,Inter:true}
        }

        case GET_PROJECT_DATA: {
            // Concatenate the existing projects with the new payload projects
            const newProjects = state.Project.concat(payload);
            return { ...state, Project: newProjects, Proj: true };
        }

        default:
            return state;
    }
}