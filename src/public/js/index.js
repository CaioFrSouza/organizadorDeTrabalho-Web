$(document).ready(()=> {
    const colors = ["red","yellow","#32CD32"]
    $('.status').each((index,element)=> {
        element.style.backgroundColor = colors[index]
    })
    ScanAll()
    $('.btn0').click(()=> {
        $(".dropzone").append(`<div class="body-text listCard" draggable="true"> teste</div>`)
        ScanAll()
    })
})

    const ScanAll = ()=> {
        $('.listCard').each((index,element)=> {
            element.addEventListener('dragstart',dragstart)
            element.addEventListener('drag',drag)
            element.addEventListener('dragend',dragend)
        })
        $('.dropzone').each((index,element)=> {
            element.addEventListener('dragenter',dragenter)
            element.addEventListener('dragover',dragover)
            element.addEventListener('dragleave',dragleave)
            element.addEventListener('drop',drop)
            return element
        })
    }
    const colorEvent = ['#FD951F05','green']
    const originalColorsBeforeEvents = ['#1a1a1c']
    const dragstart = ({target}) => {
        $('.dropzone').each((index,element)=> {
            element.style.backgroundColor = colorEvent[0]
        })
        $(target).css("cursor","move")
        $(target).css("opacity" ,"0.2")
        target.classList.add('is-dragging')
    }
    const drag = ({target}) => {
        target.style.cursor = "move"
        target.style.opacity = 0.2
    }
    const dragend = ({target}) => {
        $('.dropzone').each((index,element)=> {
            element.style.backgroundColor = originalColorsBeforeEvents[0]
        })
        target.style.cursor = "default"
        target.style.opacity = 1
        target.classList.remove('is-dragging')
    }
    
    const dragenter = ({target}) => {
        
    }
    const dragover = ({target}) => {
        target.style.backgroundColor = colorEvent[1]
        const body_text = $('.is-dragging')
        body_text.appendTo(target)
    }
    const dragleave = ({target}) => {
        target.style.backgroundColor = originalColorsBeforeEvents[0]
        
    }
    const drop = () => {
        
    }