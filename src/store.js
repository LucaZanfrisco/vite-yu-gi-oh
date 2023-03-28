import { reactive } from "vue";

export const store = reactive({
    cardList: [],
    cardListFound: 0,
    archtypeList: [],
    archtypeSelected: ''
})