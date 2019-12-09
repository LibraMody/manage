export const getters = {
    is_login(state) {
        return !!state.token.length;
    }
}
//拿mutation 里的state
  