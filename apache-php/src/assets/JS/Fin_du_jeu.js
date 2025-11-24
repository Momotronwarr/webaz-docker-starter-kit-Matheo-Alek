(function() {
	const form = document.getElementById('end-form');
	const msg = document.getElementById('message');

	function cleanupChronoAndRedirect() {
		try {
			if (window.gameTimer && typeof window.gameTimer.stop === 'function') {
				window.gameTimer.stop();
			}
			sessionStorage.removeItem('chronometreStart');
		} catch (e) {
			console.warn('chrono cleanup failed', e);
		}
		// small delay so user sees confirmation
		setTimeout(() => { window.location.href = '/'; }, 700);
	}

	if (msg) msg.textContent = 'Envoi du score...';

	fetch('/fin_du_jeu', {
		method: 'POST',
		credentials: 'same-origin',
		headers: { 'Accept': 'application/json' }
	}).then(async (r) => {
		const j = await r.json().catch(() => null);
		if (!r.ok) {
			const msgText = j && j.message ? j.message : ('HTTP ' + r.status);
			if (msg) { msg.textContent = 'Erreur : ' + msgText; msg.style.color = 'red'; }
			return;
		}

		if (j && j.status === 'ok') {
			if (msg) { msg.textContent = 'Score enregistré. Redirection...'; msg.style.color = 'green'; }
			cleanupChronoAndRedirect();
		} else {
			if (msg) { msg.textContent = 'Erreur : ' + (j && j.message ? j.message : 'Impossible d\'enregistrer'); msg.style.color = 'red'; }
		}
	}).catch(err => {
		console.error('auto submit error', err);
		if (msg) { msg.textContent = 'Erreur réseau'; msg.style.color = 'red'; }
	});

})();