import {
    ref,
    computed
} from "vue";

export default function () {
    const count = ref(0);
    const double = computed(() => count * 2)

    function increment() {
        count.value++;
    }
    return {
        count,
        double,
        increment
    }
}