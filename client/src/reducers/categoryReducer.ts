
import {ActionsTypes} from '../actions/types/actionTypes';
import {ACTIONS} from '../actions/actions';
import { IMAGE_VARIANTS } from '../components/shared/shared-images/index';

interface ISupportedService{
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface IService {
  id: number;
  tag: string;
  name: string;
  iconName: string;
  backImage?: IMAGE_VARIANTS;
  supportedServices?: ISupportedService[];
} 
export interface ICategory {
  id: number;
  name: string;
  services: IService[]; 
  isVisible?: boolean;
}
export interface ICategoryState {
  servicesCategories: Array<ICategory>,
  selectedService: IService|null;  
}

const initialState:ICategoryState = {
  servicesCategories : [
    {
      // categoryId
      id: 1,
      name: 'базовые сервисы',
      services: [{
        id: 1,
        tag:'hook-services',
        name: 'Вспомогательные сервисы',
        iconName: 'PowerBlock',
        supportedServices: [
          {
            id:1,
            title:'Расчет калорийности газа',
            description:'Расчет калорийности газа по заданному компонентному составу',
            iconName:'StackIcon'
          },
        ]
      },
      {
        id: 2,
        tag:'transfer-gas-model',
        name: 'Моделирование объектов транспортного газа',
        iconName: 'BoxIcon',
        supportedServices: [
          {
            id:4,
            title:'Гидравлический расчет газопровода',
            description:'Стационарный расчет одиночного газопровода для заданных граничных условий',
            iconName:'WheelIcon'
          }
        ]
      }]
    },
    {
      // categoryId
      id: 2,
      name: 'потоковое моделирование есг',
      services: [{
        id: 3,
        tag:'stream-esg-model',
        name: 'Моделирование потоков газа',
        iconName: 'PipeIcon',
     
        supportedServices: [
          {
            id:7,
            title:'Расчет маршрутов поставок газа',
            description:'Расчет маршрутов поставок газа от заданных начальной и конечной точек',
            iconName:'RouteCalcIcon'
          },
          {
            id:8,
            title:'Редактор схем',
            description:'Графический редактор потоковых схем',
            iconName:'SchemaIcon'
          }
        ]
      },
      ]
    },
    {
      // categoryId
      id: 3,
      name: 'тестовая категория',
      isVisible: false,
      services: [{
        id: 3,
        tag:'test-three-card',
        name: 'Моделирование потоков газа',
        iconName: 'PipeIcon',
        supportedServices: [
          {
            id:9,
            title:'Расчет маршрутов поставок газа',
            description:'Расчет маршрутов поставок газа от заданных начальной и конечной точек',
            iconName:'RouteCalcIcon'
          },
          {
            id:10,
            title:'Редактор схем',
            description:'Графический редактор потоковых схем',
            iconName:'SchemaIcon'
          },
          {
            id:11,
            title:'Тестовый заголовок',
            description:'Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. ',
            iconName:'PipeIcon'
          }
        ]
      },
      ]
    }
  ],

  selectedService: null
};

 

export const categoryReducer=(state:ICategoryState=initialState, action:ActionsTypes):ICategoryState=>{
  switch(action.type){
    case ACTIONS.CHANGED_SELECTED_SERVICE_BY_TAG:
      let selectedService = getServiceWithTag(state.servicesCategories, action.value.tag);  
      return {
        ...state,
        selectedService: selectedService
      };
    default:
        return state;
    }
}



function getServiceWithTag(categories: Array<ICategory>, tag: string){
  let selectedService = null;
  categories.forEach((category)=>{
    category.services?.forEach((service:IService)=>{
      if(service.tag === tag){
        selectedService = service;
      }
    });
  });  
  return selectedService;
}