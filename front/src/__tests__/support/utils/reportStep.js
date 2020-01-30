const reportStep = (reporter, scenario, stepIndex, variables) => {
    stepIndex = stepIndex + 1;
    let text = scenario.steps[stepIndex].stepText;

    if (Array.isArray(variables)) {
        let variablePattern = /<(\S*.)>/g;
        let match;
        let variableIndex = 0;
        do {            
            match = variablePattern.exec(text);
            if (match) {
                text = text.split(match[0]).join(variables[variableIndex])
            }
            variableIndex++;
        } while (match);
    }

    reporter.startStep(text);
    return stepIndex;
}

module.exports = reportStep