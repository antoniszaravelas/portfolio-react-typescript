interface ChildProps {
    childName: string
}

export const Child = ({ childName }: ChildProps) => {
    return (
        <>
            <div>hi I'm the child {childName}</div>
        </>
    )
}