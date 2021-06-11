import {
    reactive,
    toRefs
} from 'vue'
export default function () {
    const Data = reactive({})
    const state = reactive({
        username: "",
    });

    function onSubmit(params) {
        console.log(params)
    }

    function FormRefRepeaters(params) {
        // 唯一的
        params.value.submit()
    }

    return {
        ...toRefs(Data),
        state,
        FormRefRepeaters,
        onSubmit
    }
}