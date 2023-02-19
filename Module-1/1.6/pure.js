// initial state
const state = {
    value: 5,
}

function impure(mul) {
    state.value *= mul;
}

impure(3);
console.log(state.value)

impure(3);
console.log(state.value)