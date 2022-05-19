function solution(X, Y, D) {
    let position = X
    let endGoal = Y
    let jumpAbility = D

    let remainsToJump = endGoal - position
    let howManyJumps = remainsToJump / jumpAbility

    return Math.ceil(howManyJumps)
}
