//放入节点
interface CallbackItem {
    el: HTMLElement
    callback: () => void
}

const callbacks: CallbackItem[] = []

const onClickDocument = (e: MouseEvent) => {
    const { target } = e
    callbacks.forEach((item) => {
        if (target === item.el || item.el.contains(target as Node)) {
            return
        } else {
            item.callback()
        }
    })
}

document.addEventListener('click', onClickDocument)

const bind = (el: HTMLElement, binding: { value: () => void }) => {
    callbacks.push({ el, callback: binding.value })
}
export default { bind }

export const removeListener = () => {
    document.removeEventListener('click', onClickDocument)
}
