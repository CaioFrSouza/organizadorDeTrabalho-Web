$(document).ready(()=> {
    const colors = ["red","yellow","#32CD32"]
    $('.status').each((index,element)=> {
        element.style.backgroundColor = colors[index]
    })
    ScanAll()
    $('.btn0').click(()=> {
        const dropZone = $(".dropzone").each((index,element)=>  element)
        $(dropZone[0]).append(`<div class="body-text listCard form" draggable="true"> <div class = "form-group " > <input class="form-control bg-dark title" type="text"> <button class = "btn1 btn btn-outline-warning">Pronto</button> </div> </div>`)
        const forms = $('.form').each((index,element)=> element)
        $('.btn0').css('display','none')
        $('.btn1').click((e)=> {
            console.log('click')
            e.preventDefault()
            const val = $('.title').val()
            if(val.length < 3)
                return
            $('.form').remove()
            $(dropZone[0]).append(`<div class="body-text listCard" draggable="true">${val}</div>`)
            $('.btn0').css('display','block')
            ScanAll()
        })
    })
})

    const ScanAll = ()=> {
        $('.listCard').each((index,element)=> {
            element.removeEventListener('dragstart',null)
            element.removeEventListener('drag',null)
            element.removeEventListener('dragend',null)
            element.addEventListener('dragstart',dragstart)
            element.addEventListener('drag',drag)
            element.addEventListener('dragend',dragend)
        })
        $('.dropzone').each((index,element)=> {
            element.removeEventListener('dragenter',null)
            element.removeEventListener('dragover',null)
            element.removeEventListener('dragleave',null)
            element.removeEventListener('drop',null)
            element.addEventListener('dragenter',dragenter)
            element.addEventListener('dragover',dragover)
            element.addEventListener('dragleave',dragleave)
            element.addEventListener('drop',drop)
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
        const body_text = document.querySelector('.is-dragging')
        if(body_text)
        target.appendChild(body_text)
    }
    const dragleave = ({target}) => {
        target.style.backgroundColor = originalColorsBeforeEvents[0]
        
    }
    const drop = () => {
        
    }