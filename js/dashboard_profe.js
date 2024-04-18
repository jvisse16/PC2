
        function toggleDescription(button) {
            var description = button.parentElement.querySelector('.description');
            if (description.style.display === 'block') {
                description.style.display = 'none';
            } else {
                description.style.display = 'block';
            }
        }
