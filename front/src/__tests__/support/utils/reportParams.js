const reportParams = (reporter, object) => {
    reporter.addAttachment('параметры шага', JSON.stringify(object), 'application/json')
}

module.exports = reportParams