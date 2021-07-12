import {
    ref,
    computed
} from "vue";

export function useButton () {
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