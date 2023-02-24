'use client'

type Props = {
    github: string,
    demo: string
}

export default function CardBtns({ github, demo }: Props) {

    function openGithub() {
        window.open(github)
    }

    function openDemo() {
        window.open(demo)
    }


    return (
        <div className='flex justify-between gap-2'>
            <button className='btn w-1/2' onClick={openGithub}>GitHub</button>
            <button className='btn w-1/2' onClick={openDemo}>Demo</button>
        </div>
    )
}